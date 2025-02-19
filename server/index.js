const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Connect to DB
const db = require('./database')
db.connect();

app.prepare().then(async () => { // Make callback async
  const server = express();

  // Add essential middleware first
  server.use(express.json());
  require('./middlewares').init(server, db);

  // Initialize Apollo Server
  const { middleware } = await require('./graphql').createApolloServer();

  // Apply Apollo middleware
  server.use('/graphql', middleware);

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
