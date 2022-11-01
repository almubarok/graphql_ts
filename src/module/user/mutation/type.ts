import { mutationField, nonNull, arg } from 'nexus';
import { signUpResolver, loginResolver } from './resolver';

export const m_user = mutationField((t) => {
  t.nonNull.field('signup', {
    type: 'User',
    args: { data: nonNull(arg({ type: 'SignupInput' })) },
    resolve: signUpResolver,
  });

  t.nonNull.field('login', {
    type: 'LoginType',
    args: { data: nonNull(arg({ type: 'LoginInput' })) },
    resolve: loginResolver,
  });
});
