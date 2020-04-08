
const Portfolio = require('../../database/models/portfolio');

const data = {
  portfolios: [
    {
      _id: "sad87daasdhjdjsb",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}

exports.portfolioQueries = {
  portfolio: (root, {id}) => {
    return Portfolio.findById(id);
  },
  portfolios: () => {
    return Portfolio.find({});
  }
}

exports.portfolioMutations = {
  createPortfolio: async (root, {input}) => {
    const createdPortfolio = await Portfolio.create(input);
    return createdPortfolio;
  },
  updatePortfolio: async (root, {id, input}) => {
    const updatedPortfolio = await Portfolio.findOneAndUpdate({_id: id}, input, {new: true});
    return updatedPortfolio;
  },
  deletePortfolio: async (root, {id}) => {
    const deletedPortfolio = await Portfolio.findOneAndRemove({_id: id});
    return deletedPortfolio._id;
  }
}
