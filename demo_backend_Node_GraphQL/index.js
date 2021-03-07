const express = require('express');
const { ApolloServer } = require('apollo-server-express')

const { Queries , Mutations , TypeDefs } = require('./resolvers');

const resolvers = {
  Query : Queries ,
  Mutation : Mutations
}

const server = new ApolloServer({ TypeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

// sends a 200 and 'Hello' on all paths from localhost:4000/
app.use((req, res) => {
  res.status(200);
  res.send('Hello!');
  res.end();
})

app.listen({port: 4000 }, () =>
  console.log(`Graphql running at http://localhhost:4000/~{server.graphqlPath}`));