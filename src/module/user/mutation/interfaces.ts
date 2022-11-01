import {
  NexusGenArgTypes,
  NexusGenRootTypes,
  NexusGenFieldTypes,
} from '../../nexus/nexus';
import { ContextI } from '../../../../types';

export default interface I {
  signUp(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['signup'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['signup']>;

  login(
    src: NexusGenRootTypes['Mutation'],
    args: NexusGenArgTypes['Mutation']['login'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Mutation']['login']>;
}
