import {
  NexusGenArgTypes,
  NexusGenRootTypes,
  NexusGenFieldTypes,
} from '../../nexus/nexus';
import { ContextI } from '../../../../types';

export default interface I {
  createData(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['createData'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['createData']>;
}
