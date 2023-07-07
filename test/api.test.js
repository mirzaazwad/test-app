const request = require('supertest');
const { app, server } = require('../index');

describe('API Routes', () => {
  it('Test #1', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!!!');
  });

  it('Test #2', async () => {
      const response = await request(app).get('/hello');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Bye World');
  });
});
afterAll((done) => {
  server.close(done);
});