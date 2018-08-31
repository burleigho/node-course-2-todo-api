const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');
const { mongoose } = require('../server/db/mongoose');
const {ObjectID } = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5b88e4054c56e77dc55f8dde').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id:'5b88e4054c56e77dc55f8dde'}).then((todo) => {
  console.log(todo);
});