'use strict';

var mongoose = require('mongoose');

mongoose.models = {};
mongoose.modelSchemas = {};

before(function(done) {
  for (var i in mongoose.connection.collections) {
    mongoose.connection.collections[i].remove(function(err, remove){});
  }
  return done();
});

after(function(done) {
  mongoose.disconnect();
  return done();
});
