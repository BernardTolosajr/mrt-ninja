var mongoose = require('mongoose'),
    Line = mongoose.model('Line');

var factory = function() {
    return {
      create: function(options, done) {
        var param = options || {name: 'MRT'};
        var line = new Line(param);

        line.save(function(err, res) {
          if (err) { done(err, err); }
          done(null, res);
        });
      },

      remove: function(options, done) {
        options || {name: 'MRT'};
        Line.remove(options, function(err) {
          done(err, null);
        });
      }
  }
};

module.exports = factory();
