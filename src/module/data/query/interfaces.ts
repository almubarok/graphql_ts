import {
  NexusGenArgTypes,
  NexusGenRootTypes,
  NexusGenFieldTypes,
} from '../../nexus/nexus';
import { ContextI } from '../../../../types';

export default interface I {
  getDatas(
    src: NexusGenRootTypes['Query'],
    args: NexusGenArgTypes['Query']['getDatas'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Query']['getDatas']>;
}
