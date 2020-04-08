
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const { portfolioQueries, portfolioMutations } = require('./resolvers');
const { portfolioTypes } = require('./types');
const Portfolio = require('./models/Portfolio');

exports.createApolloServer = () => {
  // Construct a schema, using GRAPHQL schema language
  const typeDefs = gql(`
  ${portfolioTypes}

  type Query {
    portfolio(id: ID): Portfolio
    portfolios: [Portfolio]
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio
    deletePortfolio(id: ID): ID
  }`);

  // The root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries
    },
    Mutation: {
      ...portfolioMutations
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio'))
      }
    })
  })

  return apolloServer;
}
