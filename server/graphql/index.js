
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const {
  portfolioQueries,
  portfolioMutations,
  userMutations,
  userQueries,
  forumQueries, forumMutations } = require('./resolvers');
const { portfolioTypes, userTypes, forumTypes } = require('./types');
const { buildAuthContext } = require('./context');

const Portfolio = require('./models/Portfolio');
const User = require('./models/User');
const ForumCategory = require('./models/ForumCategory');
const Topic = require('./models/Topic');
const Post = require('./models/Post');

exports.createApolloServer = () => {
  // Construct a schema, using GRAPHQL schema language
  const typeDefs = gql(`
  ${portfolioTypes}
  ${userTypes}
  ${forumTypes}

  type Query {
    portfolio(id: ID): Portfolio
    portfolios: [Portfolio]
    userPortfolios: [Portfolio]

    user: User

    forumCategories: [ForumCategory]

    topicsByCategory(category: String): [Topic]
    topicBySlug(slug: String): Topic

    postsByTopic(slug: String): [Post]
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio
    deletePortfolio(id: ID): ID

    createTopic(input: TopicInput): Topic

    createPost(input: PostInput): Post

    signUp(input: SignUpInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
  }`);

  // The root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries,
      ...userQueries,
      ...forumQueries
    },
    Mutation: {
      ...portfolioMutations,
      ...userMutations,
      ...forumMutations
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: ({req}) => ({
      ...buildAuthContext(req),
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio'), req.user),
        User: new User(mongoose.model('User')),
        ForumCategory: new ForumCategory(mongoose.model('ForumCategory')),
        Topic: new Topic(mongoose.model('Topic'), req.user),
        Post: new Post(mongoose.model('Post'), req.user),
      }
    })
  })

  return apolloServer;
}
