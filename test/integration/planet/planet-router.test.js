const request = require('supertest');

const server = require(`${global.SRC}/server`);
const dummyPlanets = require(`${global.SRC}/data/dummyPlanets.json`);

describe('Planet Router', () => {
  let app;

  beforeAll(() => {
    app = server.start(5002);
  });

  afterAll(async () => {
    await app.close();
  });

  const planetUrl = '/planet-service/planets';

  describe('GET', () => {
    test('should get all planets', async () => {
      const response = await request(app).get(planetUrl);

      expect(response.status).toEqual(200);
      const { planets } = response.body;
      expect(planets.length).toEqual(2);
      expect(planets).toEqual(dummyPlanets);
    });

    test('should get planet by id', async () => {
      const planetId = dummyPlanets[1].id;
      const response = await request(app).get(`${planetUrl}/${planetId}`);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(dummyPlanets[1]);
    });

    test('should return error for invalid id', async () => {
      const response = await request(app).get(`${planetUrl}/invalid-id`);

      expect(response.status).toEqual(404);
      expect(response.body).toEqual({
        message: 'Planet Not Found'
      });
    });
  });
});
