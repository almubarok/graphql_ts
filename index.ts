import fastify from 'fastify';
import { ApolloServer } from 'apollo-server-fastify';
import { applyMiddleware } from 'graphql-middleware';

import schema from './src/module/nexus/schema';
import { createContext } from './src/shared/context';
import permissions from './src/shared/rules';
import { isDev } from './src/shared/constant';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

const httpServer = fastify({});

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer.server,
  // Pass a different path here if app.use
  // serves expressMiddleware at a different path
  path: '/graphql',
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema, context: createContext }, wsServer);

const server = new ApolloServer({
  introspection: true,
  schema: applyMiddleware(schema, permissions),
  context: createContext,
  debug: isDev(),
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer: httpServer.server }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

server.start().then(() => {
  httpServer.register(server.createHandler());
  httpServer.listen(
    { port: Number(process.env.PORT || 4000) },
    async (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`🚀  Server listening at ${address}`);
      console.log(`🚀  Graphql listening at ${server.graphqlPath}`);
    }
  );
});

process.on('uncaughtException', (error) => {
  console.error(error);
});
process.on('unhandledRejection', (error) => {
  console.error(error);
});
