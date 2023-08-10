const { ApolloServer } = require('apollo-server');
const gqp = require('graphql-tag');
const { config } = require('dotenv');

config({
    path: "./Config/config.env"
});

const typeDefs = gqp`
  type Query {
    sayHi: String!
  }
`

const resolvers = {
    Query: {
        sayHi: () => 'Hello World!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen( process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})




