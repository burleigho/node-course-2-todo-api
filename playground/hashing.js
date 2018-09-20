const {SHA256} = require ('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (error, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//     console.log(hash);
//   });
// });

const hashedPassword = '$2a$10$xS24UajNsVF/Nr/9UhUyGe3pncqPAAMs7SA7GoJVOon8IIs2RuTK.';

bcrypt.compare('123abc!', hashedPassword, (error, result) => {
  console.log(result);
})

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc')
// console.log(token)
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'i am user 3';
// var hash = SHA256(message).toString();
// console.log(`Message ${message}`);
// console.log(`Hash ${hash}`);

// var data = {
//   id:  4, 
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed');
// }


