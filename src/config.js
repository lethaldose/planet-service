const _ = require("lodash");

const config = {
  name: "planet-service",
  port: process.env.PORT || 3001
};

const get = () => config;

const validate = () => {
  return true;
};

module.exports = {
  get,
  validate
};
