import { mutationField, arg, nonNull, intArg } from 'nexus';
import { createDataResolver } from './resolvers';

export const m_data = mutationField((t) => {
  t.nonNull.field('createData', {
    type: 'Data',
    args: { data: nonNull(arg({ type: 'DataInput' })) },
    resolve: createDataResolver,
  });
});
