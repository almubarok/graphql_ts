import { arg, intArg, nonNull, queryField, stringArg } from 'nexus';
import { getDatas } from './resolvers';

export const q_data = queryField((t) => {
  t.list.field('getDatas', {
    type: 'Data',
    args: {
      device_id: nonNull(intArg()),
      order: stringArg(),
      sort: arg({ type: 'sort' }),
      limit: intArg(),
      page: intArg(),
    },
    resolve: getDatas,
  });
});
