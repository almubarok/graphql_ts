import { arg, intArg, queryField, stringArg } from 'nexus';
import { getDevicesResolver } from './resolvers';

export const q_device = queryField((t) => {
  t.list.field('getDevices', {
    type: 'Device',
    args: {
      search: stringArg(),
      order: stringArg(),
      sort: arg({ type: 'sort' }),
      limit: intArg(),
      page: intArg(),
    },
    resolve: getDevicesResolver,
  });
});
