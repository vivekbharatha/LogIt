/**
 * Created by v3xvard on 17/1/16.
 */
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var server = express();

var port = process.env.PORT || 3000;

server.use("/", express.static(path.join(__dirname + '/ngApp')));
server.use(morgan('dev'));
server.listen(port, function() {
    console.log('Server running at port: ' + port);
});