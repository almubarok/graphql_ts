import {
  NexusGenArgTypes,
  NexusGenRootTypes,
  NexusGenFieldTypes,
} from '../../nexus/nexus';
import { ContextI } from '../../../../types';

export default interface I {
  createDevice(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['createDevice'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['createDevice']>;
  updateDevice(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['updateDevice'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['updateDevice']>;
  deleteDevice(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['deleteDevice'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['deleteDevice']>;
}
