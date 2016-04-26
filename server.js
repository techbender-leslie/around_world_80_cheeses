// require express and other modules
var app = require('./config');
var path = require('path');
var cheesesController = require('./controllers/cheesesController');
require('./routes');

  
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

// listen on port 3000
app.listen(3000, function() {
  console.log('server started on localhost:3000');
});
