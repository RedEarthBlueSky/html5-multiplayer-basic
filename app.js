const express = require('express');
const app = express();
const serv = require('http').Server(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

const port = 2000;

serv.listen(2000, function () {
  console.log('server is listening on port: ' + port);
})

//
