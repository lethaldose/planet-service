const dummyPlanets = require('../data/dummyPlanets.json');

class Planet {
  static getAll() {
    return dummyPlanets;
  }

  static getById(id) {
    return dummyPlanets.find(planet => planet.id === id);
  }
}

module.exports = Planet;
