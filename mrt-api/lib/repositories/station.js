'use strict';

module.exports = function(Station) {
  var station = {};

  station.getAll = function(ids, done) {
    Station.find({_id: {$in: ids}}, function(err, stations) {
      if (err) { return done (err, null);}
      done(err, stations);
    });
  };

  return station;
};
