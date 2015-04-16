'use strict';

module.exports = function(Incident) {
  var incident = {};

  incident.create = function(options, done) {
    var model = new Incident({
      name: options.name,
      station: options.station,
      line: options.line
    });

    model.save(function(err, result) {
      if (err) { done(err, null); }
      done(null, result);
    });
  };

  incident.upvotes = function(uid, done) {
    var options = { multi: true },
        cond = {_id: uid},
        update = {$inc: {votes: 1}};

    Incident.update(cond, update, options, function(err, result) {
      if (err) { done(err, null); }
      done(null, result);
    })
  };

  incident.findbyStation = function(id, done) {
    Incident.find({station: id}, function(err, incidents) {
      if (err) { done(err, null); }
      done(null,incidents);
    });
  };

  incident.findByIds = function(ids, done) {
    Incident.find({_id: {$in : ids}}, function(err, incidents) {
      if (err) { done(err, null); }
      done(null, incidents);
    });
  };

  return incident;
};
