import { subscriptionField, intArg } from 'nexus';
import { withFilter } from 'graphql-subscriptions';
import { ContextI } from '../../../../types';
import { TOPICS, pubsub } from '../../../shared';
import { NexusGenObjects } from '../../nexus/nexus';

export const s_device = subscriptionField((t) => {
  t.field('device', {
    type: 'DeviceSubscription',
    subscribe: withFilter(
      () => pubsub.asyncIterator(TOPICS.DEVICE),
      (
        payload: NexusGenObjects['DeviceSubscription'],
        _variables: null,
        ctx: ContextI
      ) => {
        return ctx.userId == payload.value.owner_id;
      }
    ),
    resolve: (payload: any) => {
      return payload;
    },
  });
});
