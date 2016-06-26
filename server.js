var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

//Brings the expressJS configuration into the current project
require('./server/config/express')(app, config);

//Bring in the Mongoose configuration and MongoDB connection
require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log("Listening on port " + config.port + "...");