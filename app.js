import 'dotenv/config';

var express = require('express');
var app = express();
var http = require('http').Server(app);
import path from 'path';

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
