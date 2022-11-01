import { ContextI } from '../../types';
import { handleError, errors } from './errors';

const isAuthenticatedUser = async (
  resolve: any,
  _parent: any,
  _args: any,
  ctx: ContextI,
  info: any
) => {
  try {
    if (ctx.userId === -1) {
      return handleError(errors.notAuthenticated);
    }

    const user = await ctx.prisma.user.findUnique({
      where: { id: ctx.userId },
    });
    if (!user) handleError(errors.notAuthenticated);

    const result = await resolve(_parent, _args, ctx, info);
    return result;
  } catch (e) {
    return e;
  }
};

export default {
  Query: {
    getDatas: isAuthenticatedUser,
    getDevices: isAuthenticatedUser,
  },
  Mutation: {
    createData: isAuthenticatedUser,
    createDevice: isAuthenticatedUser,
    updateDevice: isAuthenticatedUser,
    deleteDevice: isAuthenticatedUser,
  },
  Subscription: {
    data: isAuthenticatedUser,
    device: isAuthenticatedUser,
  },
};
