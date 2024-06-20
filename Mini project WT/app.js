const { MongoClient } = require('mongodb');

async function run() {
  const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('users');

    const doc = {
      firstName: "John",    
      phone: "1234567890",
      device: "iPhone",
      amount: 50
    };

    const result = await collection.insertOne(doc);
    console.log(`New document inserted with the following id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
