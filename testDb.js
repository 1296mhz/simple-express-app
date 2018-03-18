// Connect to the db
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/notes';

// Database Name
const dbName = 'notes';

// Use connect method to connect to the server

async function connectMongo(url) {
    return await MongoClient.connect(url, ()=>{
     console.log("Connected successfully to server");
    });

    
}

async ()=>{
    
   
}
var client = connectMongo(url);

(async (client)=>{
    
    const db = await client.db(dbName);
    var Notes = await db.collection('notes').find().toArray()
    console.log(Notes)
    await client.close();
})();




