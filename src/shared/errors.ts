import { prismaErrorI } from '../../types/index';
import { AuthenticationError, UserInputError } from 'apollo-server-fastify';

export const errors = {
  notAuthenticated: new AuthenticationError('unauthenticated user!'),
  userAlreadyExist: new UserInputError('user already exists!'),
  wrongLogin: new UserInputError('wrong username or password'),
  fieldInvalid: (field: string) => new UserInputError(`invalid ${field}`),
  fieldNotFound: (field: string) => new UserInputError(`${field} not found`),
  duplicateError: (field: string) =>
    new UserInputError(`${field} already exists!`),
};

export const handleError = (error: any) => {
  // add any other logging mechanism here e.g. Sentry
  // https://www.prisma.io/docs/concepts/components/prisma-client/error-reference#error-codes

  const err: prismaErrorI = error;
  const meta_target = err.meta?.target || [];
  console.log(error);

  switch (err.code) {
    case 'P2002':
      throw errors.duplicateError(meta_target.join(','));
    default:
      throw error;
  }
};
