import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

export interface TokenI {
  userId: number;
  timestamp: number;
}

export interface ContextI {
  userId: number;
  prisma: PrismaClient;
  pubsub: PubSub;
  request: {
    request: {
      headers: {
        authorization: string;
      };
    };
    connection: {
      context: {
        Authorization: string;
      };
    };
  };
}

export interface prismaErrorI {
  code: string;
  message: string;
  meta?: {
    target: [string];
  };
  stack?: string;
}
