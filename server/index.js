const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const typeDefs = fs.readFileSync(`${__dirname}/graphql/typeDefs.graphql`, 'utf8')
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});