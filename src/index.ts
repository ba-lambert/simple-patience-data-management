import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { types } from "./schemas/auth.schema";
import { connect } from "./utils/db.config";
import { signUp } from "./resolvers/auth.resolver";
import { doctorsResolver } from "./resolvers/doctors.resolver";
import { doctorSchema } from "./schemas/doctors.schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

const typeDefs = mergeTypeDefs([types,doctorSchema]);
const resolvers = mergeResolvers([signUp,doctorsResolver]);

const server = new ApolloServer({ typeDefs, resolvers});

async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });
  connect();
  app.listen({ port: 4001 }, () =>
    console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
  );
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
