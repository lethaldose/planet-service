const HTTPErrors = require("http-custom-errors");
const util = require("util");

function PlanetServiceError(fields) {
  this.message = "PlanetServiceError";
  this.fields = fields;
  this.statusCode = 500;
}

util.inherits(PlanetServiceError, HTTPErrors.InternalServerError);

module.exports = PlanetServiceError;
