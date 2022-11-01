import I from './interfaces';

import {
  handleError,
  generatePassword,
  errors,
  validPassword,
  generateAccessToken,
} from '../../../shared';

export const signUpResolver: I['signUp'] = async (_, { data }, ctx) => {
  try {
    const exists = await ctx.prisma.user.findUnique({
      where: { username: data.username },
    });
    if (exists) {
      throw errors.userAlreadyExist;
    }

    const hashedPwd = await generatePassword(data.password);

    const user = await ctx.prisma.user.create({
      data: { ...data, password: hashedPwd },
    });
    return user;
  } catch (error) {
    throw handleError(error);
  }
};

export const loginResolver: I['login'] = async (_, { data }, ctx) => {
  try {
    const user = await ctx.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (!user) throw errors.wrongLogin;

    const validPwd = await validPassword(data.password, user.password);
    if (!validPwd) throw errors.wrongLogin;

    return {
      token: generateAccessToken(user.id),
      user,
    };
  } catch (error) {
    throw handleError(error);
  }
};
