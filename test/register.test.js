const request = require("supertest");
const { app, server } = require("../index");

describe("API Routes", () => {
  it("Test fetches register", async () => {});

  it("Test register button registers the user", async () => {});
});
afterAll((done) => {
  server.close(done);
});
