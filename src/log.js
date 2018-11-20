const bunyan = require('bunyan');
const morgan = require('morgan');
const config = require('./config').get();

const log = bunyan.createLogger({
  name: config.name,
  streams: [
    {
      path: `./${config.name.toLowerCase()}.log`
    }
  ]
});

const logStream = {
  write: message => log.info(message)
};

const morganHttpLogger = () => morgan('short', { stream: logStream });

module.exports = {
  log,
  morganHttpLogger
};
