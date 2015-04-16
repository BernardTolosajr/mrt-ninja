'use strict';

module.exports = function(smokeRepository) {
  var smoke = {};
  smoke.create = function(value, done) {
    smokeRepository.create(value, function(err, smoke){
      //for more validation here
      if (err) { done(err, null);}
      done(null, smoke);
    });
  }
  return smoke;
};
