import { objectType, inputObjectType } from 'nexus';

export const t_user = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.username();
  },
});

export const t_login = objectType({
  name: 'LoginType',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

export const i_login = inputObjectType({
  name: 'LoginInput',
  definition: (t) => {
    t.nonNull.string('username');
    t.nonNull.string('password');
  },
});

export const i_signup = inputObjectType({
  name: 'SignupInput',
  definition: (t) => {
    t.nonNull.string('name');
    t.nonNull.string('username');
    t.nonNull.string('password');
  },
});
