var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

io.on('connection', function(socket){
  console.log('A user successfully connected!');
  socket.on('disconnect', function(socket) {
    console.log("A user has disconneted.")
  });

  socket.on('message', function(message) {
    console.log('Message: ' + message);
    io.emit('incoming_message', message);
  });
});

http.listen(3000, function(){
  console.log('Server listening on port 3000.');
});
