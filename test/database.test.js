require('dotenv').config();
const { MongoClient } = require('mongodb');

describe('Database Connection', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const uri = process.env._MONGO_URI; // Assumes your .env file has the MONGO_URI variable
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    connection = await client.connect();
    db = connection.db();
  });

  afterAll(async (done) => {
    await connection.close();
    server.close(done);
  });

  test('should connect to the MongoDB database', async () => {
    expect(connection.topology.isConnected()).toBe(true);
  });

  test('should access a collection in the database', async () => {
    const collection = await db.collection('users');
    const documents = await collection.find({}).toArray();
    expect(documents).toHaveLength(1); // assuming the collection is initially empty
  });
});
