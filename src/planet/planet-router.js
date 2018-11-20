const expressRouter = require('express-promise-router');
const metrics = require('../metrics');
const Planet = require('./planet');

const router = expressRouter();

router.get('/', async (req, res) => {
  const planets = Planet.getAll();
  return res.status(200).send({ planets });
});

router.get('/:id', async (req, res) => {
  const planetId = Number(req.params.id);
  const planet = Planet.getById(planetId);
  if (!planet) {
    metrics.incrementFail();
    return res.status(404).send({ message: 'Planet Not Found' });
  }
  metrics.incrementSuccess();
  return res.status(200).send(planet);
});

module.exports = router;
