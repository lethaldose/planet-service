const s = require('strummer');
const InvalidSchemaError = require('../errors/invalid-schema-error');

const hasErrors = (object, matcher) => {
  if (matcher) {
    return matcher.match(object);
  }
  return false;
};

exports.validate = (schemaOptions = {}) => {
  const bodyMatcher = schemaOptions.body ? s(schemaOptions.body) : null;
  const paramsMatcher = schemaOptions.params ? s(schemaOptions.params) : null;

  return function(req, res, next) {
    const errorFields =
      hasErrors(req.params, paramsMatcher) || hasErrors(req.body, bodyMatcher);

    if (errorFields.length > 0) {
      return next(new InvalidSchemaError(errorFields));
    }

    return next();
  };
};
