'use scrict';

var express = require('express'),
    app = module.exports = express(),
    port = process.env.PORT || 3000,
    env = process.env.NODE_ENV || 'development';

require('./config/mongo')(env);
require('./config/index')(app);
require('./config/routes')(app);

//if the current script is loaded
if (!module.parent) {
  app.listen(port);
  //TODO whitelist this to eslint
  console.log('listening on port: ' + port + ' in ' + env + ' mode.');
}
