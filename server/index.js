const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const data = {
  portfolios: [
    {
      _id: '32dsa8d9',
      title: 'Job in USA',
      jobTitle: 'Chef',
      daysOfExperience: 100,
      isCurrentlyEmployed: false
    },
    {
      _id: 'fa6dsa78',
      title: 'Job in Barcelona',
      content: 'It was very suny experience',
      jobTitle: 'Developer',
      isCurrentlyEmployed: true
    },
    {
      _id: 'asd7a8d789',
      title: 'Job in Germany',
      content: 'It was very good!',
      jobTitle: 'Manager',
      daysOfExperience: 30,
      isCurrentlyEmployed: true
    },
  ]
}

app.prepare().then(() => {
  const server = express()

  // Construct a schema, using GRAPHQL schema language
  const schema = buildSchema(`
      type Porfolio {
        _id: ID!
        title: String
        content: String
        jobTitle: String,
        daysOfExperience: Int,
        isCurrentlyEmployed: Boolean
      }

      type Query {
        hello: String
        portfolio: Porfolio
        portfolios: [Porfolio]
      }
  `);

  // The root provides a resolver for each API endpoint
  const root = {
    hello: () => {
      return 'Hello World!'
    },
    portfolio: () => {
      return data.portfolios[0]
    },
    portfolios: () => {
      return data.portfolios
    }
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
