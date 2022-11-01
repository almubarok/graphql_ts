import { objectType, inputObjectType } from 'nexus';

export const t_data = objectType({
  name: 'Data',
  definition(t) {
    t.model.id();
    t.model.batery();
    t.model.co2();
    t.model.no2();
    t.model.o2();
    t.model.created_at();
    t.model.device_id();
  },
});

export const i_data = inputObjectType({
  name: 'DataInput',
  definition(t) {
    t.nonNull.int('batery');
    t.nonNull.int('co2');
    t.nonNull.int('no2');
    t.nonNull.int('o2');
    t.nonNull.int('device_id');
  },
});

export const ts_data = objectType({
  name: 'DataSubs',
  definition(t) {
    t.nonNull.string('mutation'), t.nonNull.field('value', { type: 'Data' });
  },
});
