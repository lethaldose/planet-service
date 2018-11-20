const bodyParser = require('body-parser');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const config = require('./config').get();
const errorHandler = require('./middleware/error-handler');
const { log, morganHttpLogger } = require('./log');
const routes = require('./routes');
const metrics = require('./metrics');

const start = port => {
  const serverPort = port || config.port;

  const app = express();
  app.use(compression({ threshold: 0 }));
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false
    })
  );

  app.use(bodyParser.json({ limit: '200kb' }));
  app.use(morganHttpLogger());
  app.get('/planet-service', (req, res) => {
    res.send({ 'planet-service': 'Hello' });
  });

  app.get('/health-check', (req, res) => {
    res.send({ status: 'ok' });
  });

  app.get('/metrics', (req, res) => {
    res.send(metrics.get());
  });

  app.use('/planet-service', routes);
  app.use(errorHandler);
  return app.listen(serverPort, () => {
    log.info(`Planet Service Started:: listening at ${serverPort}`);
  });
};

module.exports = {
  start
};
