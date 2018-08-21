//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b7c077d883e3819c4f004ad')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch documents', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch documents', err);
  // });

  db.collection('Users').find({name: 'Oliver'}).toArray().then((name) => {
    console.log('Users');
    console.log(JSON.stringify(name, undefined, 2));
  }, (err) => {
    console.log('unable to get docs', err);
  });

  //client.close();
});