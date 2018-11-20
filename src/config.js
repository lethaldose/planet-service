const env = process.env.NODE_ENV || 'dev';
const envConfig = require(`./configs/${env}.json`);

const get = () => envConfig;

const validate = () => true;

module.exports = {
  get,
  validate
};
