var express = require('express');

// Main application.
var app = express();
// app.set('view engine', 'html');
// app.set('views', require('path').join(__dirname, 'my-views'));
// app.engine('html', require('ejs').renderFile);

// Website application.
var website = new express.Router();
website.get('/', function (req, res) {
  res.render('home');
});
 
// API application.
var api = new express.Router();
api.get('/articles', function (req, res) {
  res.send([{ title: 'hello' }]);
});

// Mouting applications.
app.use('/', website);
app.use('/api', api);

// Start listening.
app.listen(3000);  