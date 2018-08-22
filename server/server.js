const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

// const Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     require: true,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

const User = mongoose.model('Users', {
  name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
  
let newUser = new User({
  name: 'Steve',
  email: 'steve@steve.com'
});

newUser.save().then((result) => {
  console.log(`Saved to do ${result}`)
}, (e) => {
  console.log(e);
});