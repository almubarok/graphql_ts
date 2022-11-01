import { verify } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

import { TokenI, ContextI } from '../../types/index';
import { APP_SECRET } from './constant';

export const pubsub = new PubSub();
export const prisma = new PrismaClient({ errorFormat: 'pretty' });

export function createContext(ctx: any): ContextI {
  let userId: number;
  try {
    let Authorization = '';

    try {
      // for queries and mutations
      Authorization = ctx.request.headers.Authorization;
      if (!Authorization) Authorization = ctx.request.headers.authorization;
    } catch (e) {
      // specifically for subscriptions as the above will fail
      Authorization = ctx?.connectionParams.Authorization;
      if (!Authorization) Authorization = ctx?.connectionParams.authorization;
    }

    const token = Authorization.split(' ')[1];

    const verifiedToken = verify(token, APP_SECRET) as TokenI;
    if (!verifiedToken.userId) {
      userId = -1;
    } else {
      userId = verifiedToken.userId;
    }
  } catch (e) {
    userId = -1;
  }

  return { prisma, pubsub, request: ctx, userId };
}
