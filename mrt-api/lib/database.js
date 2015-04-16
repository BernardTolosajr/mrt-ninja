'use script';

var mongoose = require('mongoose');

var db = function() {
  return {
    connect: function(url) {
      mongoose.connect(url);
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function callback() {
        console.log('db connection open at ', url);
      });
    }
  }
};

module.exports = db();
