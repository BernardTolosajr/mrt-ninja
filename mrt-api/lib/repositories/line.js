'use strict';

module.exports = function(Line) {
  var line = {};

  line.getAll = function(done) {
    Line.find({}, function(err, lines) {
      done(err, lines);
    });
  };

  return line;
};
