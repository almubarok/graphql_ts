import { objectType, inputObjectType } from 'nexus';

export const t_device = objectType({
  name: 'Device',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.code();
    t.model.pos_lat();
    t.model.pos_lon();
    t.model.created_at();
    t.model.updated_at();
    t.model.owner_id();
  },
});

export const i_device = inputObjectType({
  name: 'DeviceInput',
  definition(t) {
    t.nonNull.string('name');
    t.nonNull.string('code');
    t.nullable.string('pos_lat');
    t.nullable.string('pos_lon');
  },
});

export const ts_device = objectType({
  name: 'DeviceSubscription',
  definition(t) {
    t.nonNull.string('mutation');
    t.nonNull.field('value', { type: 'Device' });
  },
});
