import { intArg, nonNull, subscriptionField } from 'nexus';
import { withFilter } from 'graphql-subscriptions';
import { TOPICS, pubsub } from '../../../shared';
import { ContextI } from '../../../../types';
import { NexusGenObjects, NexusGenArgTypes } from '../../nexus/nexus';

export const s_data = subscriptionField((t) => {
  t.nonNull.field('data', {
    type: 'DataSubs',
    args: {
      device_id: nonNull(intArg()),
    },
    subscribe: withFilter(
      () => pubsub.asyncIterator(TOPICS.DATA),
      (
        payload: NexusGenObjects['DataSubs'],
        variables: NexusGenArgTypes['Subscription']['data'],
        _ctx: ContextI
      ) => {
        return variables.device_id === payload.value.device_id;
      }
    ),
    resolve: (payload: any) => {
      return payload;
    },
  });
});
