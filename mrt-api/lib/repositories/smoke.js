'use strict';

module.exports = function(Smoke) {
  var smoke = {};

  smoke.create = function(value, done) {
    var model = new Smoke({
      value: value
    });

    model.save(function(err, result) {
      if (err) { done(err, null); }
      done(null, result);
    });
  }

  return smoke;
};
