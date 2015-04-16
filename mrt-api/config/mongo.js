'use strict';

var fs = require('fs'),
    db = require('../lib/database'),
    config = require('./config');

var mongo = function(env) {

  var modelsPath = config.app.root + '/models';
  fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('js')) {
      require(modelsPath + '/' + file);
    }
  });

  var url = '';
  if (env === 'production') {
    url = config.production.db.url;
  } else if (env === 'development') {
    url = config.development.db.url;
  } else {
    url = config.test.db.url;
  }

  return db.connect(url);

};

module.exports = mongo;
