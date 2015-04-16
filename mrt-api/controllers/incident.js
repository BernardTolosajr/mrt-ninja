'use strict';

module.exports = function(service) {
  var incident = {};

  incident.create = function(req, res) {
    var param = req.body;

    service.create(param.incident, function(err, result) {
      if (err) { res.status(422).json({error: err}); }
      res.status(201).json({incident: result});
    });
  };

  incident.upvotes = function(req, res) {
    var uid = req.params.id;
    service.upvotes(uid, function(err, result) {
      res.json({votes: result});
    });
  };

  incident.findBy = function(req, res) {
    var stationId = req.params.id;
    service.findbyStation(stationId, function(err, incidents) {
      if (err) { res.status(422).json({error: err}); }
      res.json({incidents: incidents});
    });
  };

  return incident;
};
