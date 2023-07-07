const request = require("supertest");
const { app, server } = require("../index");

describe("API Routes", () => {
  it("Submit register form", async () => {
    // const userData = {
    //   name: "John Doe",
    //   email: "johndoe@example.com",
    //   password: "password123",
    //   confirmPassword: "password123",
    // };

    // const response = await request(app).post("/register").send(userData);

    // expect(response.status).toBe(200);
  });

  it("Test register button registers the user", async () => {});
});
afterAll((done) => {
  server.close(done);
});
