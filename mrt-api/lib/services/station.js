'use strict';

module.exports = function(stationRepository) {
  var station = {};

  station.getAll = function(ids, done) {
    stationRepository.getAll(ids, function(err, stations){
      if (err) { done(err, null);}
      var t = stations.map(function(station) {
        return {
          _id: station._id,
          name: station.name,
          createdAt: station.createdAt,
          links: {
            incidents: '/stations/' + station.id + '/incidents'
          }
        };
      });

      done(null, t);
    });
  };

  return station;
};
