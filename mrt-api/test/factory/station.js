var mongoose = require('mongoose'),
    Station = mongoose.model('Station');

var factory = function() {
    return {
      create: function(options, done) {
        var param = options || {name: 'Ayala'};
        var station = new Station(param);
        station.save(function(err, station) {
          if (err) { done(err, null); }
          done(null, station);
        });
      },

      remove: function(options, done) {
        options || {name: 'Ayala'};
        Station.remove(options, function(err) {
          done(err, null);
        });
      }
  }
};

module.exports = factory();
