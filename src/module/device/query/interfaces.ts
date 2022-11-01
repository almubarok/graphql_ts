import {
  NexusGenArgTypes,
  NexusGenRootTypes,
  NexusGenFieldTypes,
} from '../../nexus/nexus';
import { ContextI } from '../../../../types';

export default interface I {
  getDevices(
    src: NexusGenRootTypes['Query'],
    args: NexusGenArgTypes['Query']['getDevices'],
    ctx: ContextI
  ): Promise<NexusGenFieldTypes['Query']['getDevices']>;
}
