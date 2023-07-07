const request = require('supertest');
const { app, server } = require('../index');

describe('API Routes', () => {
  afterAll((done) => {
    server.close(done);
  });
  test('Test #1', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Ken KAAJ KORTESE NA 🤧');
  });

  test('Test #2', async () => {
      const response = await request(app).get('/hello');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Bye World');
  });
  test('Test #3', async () => {
    const response = await request(app).get('/nafisa');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Nafisa is successful');
});
});
