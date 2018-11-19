const s = require('strummer');

const PLANET_QUERY_REQUEST = s({
  price: s.string({ min: 1 })
});

module.exports = {
  PLANET_QUERY_REQUEST
};
