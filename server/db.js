const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/dbname';
let db;

async function getNextSequence(name) {
    const result = await db.collection('name').findOneAndUpdate(
        { _id: name },
        { $inc: { current: 1 } },
        { returnOriginal: false },
    );
    return result.value.current;
}

async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
}

function getDb() {
    return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
