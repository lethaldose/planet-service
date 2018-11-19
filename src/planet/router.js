const expressRouter = require('express-promise-router');
const schemaValidator = require('../middleware/schema-validator');
const metrics = require('../metrics');

const router = expressRouter();

router.post('/', async (req, res) => {
  return res.status(200).send({});
});

module.exports = router;
