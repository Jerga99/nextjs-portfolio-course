
const Portfolio = require('../../database/models/portfolio');

exports.portfolioQueries = {
  portfolio: (root, {id}, ctx) => {
    return ctx.models.Portfolio.getById(id);
  },
  portfolios: (root, args, ctx) => {
    return ctx.models.Portfolio.getAll();
  }
}

exports.portfolioMutations = {
  createPortfolio: async (root, {input}, ctx) => {
    const createdPortfolio = await Portfolio.create(input);
    return createdPortfolio;
  },
  updatePortfolio: async (root, {id, input}, ctx) => {
    const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(id, input);
    return updatedPortfolio;
  },
  deletePortfolio: async (root, {id}, ctx) => {
    const deletedPortfolio = await ctx.models.Portfolio.findAndDelete(id);
    return deletedPortfolio._id;
  }
}
