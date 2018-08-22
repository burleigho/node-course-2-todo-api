//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  db.collection('Users').deleteMany({ _id: new ObjectID('5b7c08bcda4fe0225c4d0839')}).then((result) => {
    console.log(result);
  });

  //client.close();
});