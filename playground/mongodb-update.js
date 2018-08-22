//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b7c11afe2638a2b941e9246")
  }, {
    $set: {
      name: 'Oliver'
      }, 
    $inc: {
      age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }); 

  //client.close();
});