// database.test.js

require('dotenv').config();
const { MongoClient } = require('mongodb');
const { app, server } = require("../index");

describe('Database Connection', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const uri = process.env._MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    connection = await client.connect();
    db = connection.db();
  });

  afterAll(async () => {
    await connection.close();
    server.close();
  });

  test('should connect to the MongoDB database', async () => {
    expect(connection.topology.isConnected()).toBe(true);
  });

  test('should access a collection in the database', async () => {
    const collection = db.collection('users');
    const documents = await collection.find({}).toArray();
    expect(documents.length).toBeGreaterThan(1); // assuming the collection is initially empty
  });
});
