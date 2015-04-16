'use strict';

var moment = require('moment'),
    date = require('../../lib/date');

module.exports = function(incidentRepo, activity) {
  var incident = {};

  incident.create = function(options, done) {
    incidentRepo.create(options, function(err, result){
      if (err) { done(err, null);}

      activity.track(result.line, result.id, date.unixstamp(), function(err, reply) {
        if (err) { return done(err, null);}
      });

      activity.track(result.station, result.id, date.unixstamp(), function(err, reply) {
        if (err) { return done(err, null);}
        done(null, result);
      });
      /*
      activity.post(result.station, result.id, function(err, reply) {
        if (err) { return done(err, null);}
        activity.track(result.line, result.id, date.unixstamp(), function(err, reply) {
          if (err) { return done(err, null);}
          done(null, result);
        });
      });
      */
    });
  };

  incident.upvotes = function(uid, done) {
    incidentRepo.upvotes(uid, function(err, result){
      if (err) { done(err, null); }
      done(null, result);
    });
  };

  incident.findbyStation = function(id, done) {
    var ago = date.unixstamp() - (60 * 5);

    activity.active(id, ago, function(err, ids) {
      if (err) { done(err, null); }
      incidentRepo.findByIds(ids, function(err, incidents) {
        if (err) { return done(err, null); }
        done(null, incidents)
      });
    });

    /*
    activity.posts(id, function(err, ids) {
      if (err) { done(err, null); }
      incidentRepo.findByIds(ids, function(err, incidents) {
        if (err) { done(err, null); }
        done(null, incidents)
      });
    });
    */
  };

  return incident;
};
