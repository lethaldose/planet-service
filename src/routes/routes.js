const expressRouter = require('express-promise-router');
const planetRouter = require('../planet/router');

const router = expressRouter();

router.use('/planet', planetRouter);

module.exports = router;
