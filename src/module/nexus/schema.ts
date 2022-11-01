import { makeSchema, enumType } from 'nexus';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import path from 'path';
import { ContextI } from '../../../types';
import * as UserTypes from '../user';
import * as DeviceTypes from '../device';
import * as DataTypes from '../data';

const SortEnum = enumType({ name: 'sort', members: ['asc', 'desc'] });

const nexusPrisma = nexusSchemaPrisma({
  experimentalCRUD: true,
  paginationStrategy: 'prisma',
  prismaClient: (ctx: ContextI) => ctx.prisma,
  outputs: {
    typegen: path.join(__dirname, 'typegen-nexus-plugin-prisma.d.ts'),
  },
});

export default makeSchema({
  types: [SortEnum, UserTypes, DeviceTypes, DataTypes],
  plugins: [nexusPrisma],
  outputs: {
    schema: __dirname + '/../../../schema.graphql',
    typegen: __dirname + '/nexus.ts',
  },
  contextType: {
    module: __dirname + '/../../../types',
    export: 'ContextI',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});
