const expressRouter = require('express-promise-router');
const planetRouter = require('../planet/planet-router');

const router = expressRouter();

router.use('/planets', planetRouter);

module.exports = router;
