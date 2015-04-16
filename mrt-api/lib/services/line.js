'use strict';

var Activity = require('../activity'),
    moment = require('moment'),
    date = require('../../lib/date');

module.exports = function(repository) {
  var line = {};

  line.getAll = function(done) {
    repository.getAll(function(err, lines){
      if (err) { done(err, null);}
      var t = lines.map(function(line) {
        return {
          _id: line._id,
          name: line.name,
          bound: line.bound,
          stations: line.stations
        };
      });

      done(null, t);
    });
  };

  line.incidents = function(uid, done) {
    var ago = date.unixstamp() - (60 * 5);
    Activity.active(uid, ago, function(err, reply) {
      done(err, reply);
    });
  };

  return line;
};
