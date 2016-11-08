const express = require('express');
const app = express();
const serv = require('http').Server(app);

//  require the socket io and then intialize it
const io = require('socket.io')(serv,{});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

const port = 2000;

serv.listen(2000, function () {
  console.log('server is listening on port: ' + port);
});

io.sockets.on('connection', function(socket){
  console.log('socket connection');

  socket.on('happy', function(data) {
    console.log('happy because: ' + data.reason);
  });

  socket.emit('serverMsg', {
    msg:'hello',
  });

});
