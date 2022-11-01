import { arg, intArg, mutationField, nonNull } from 'nexus';
import {
  createDeviceResolver,
  updateDeviceResolver,
  deleteDeviceResolver,
} from './resolvers';

export const m_device = mutationField((t) => {
  t.nonNull.field('createDevice', {
    type: 'Device',
    args: { data: nonNull(arg({ type: 'DeviceInput' })) },
    resolve: createDeviceResolver,
  });

  t.nullable.field('updateDevice', {
    type: 'Device',
    args: { device_id: nonNull(intArg()) },
    resolve: updateDeviceResolver,
  });
  t.nullable.field('deleteDevice', {
    type: 'Device',
    args: { device_id: nonNull(intArg()) },
    resolve: deleteDeviceResolver,
  });
});
