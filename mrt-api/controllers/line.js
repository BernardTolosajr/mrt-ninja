'use strict';

module.exports = function(service) {
  var line = {};

  line.get = function(req, res) {
    service.getAll(function(err, lines) {
      res.json({lines: lines});
    });
  };

  line.incidents = function(req, res) {
    var uid = req.params.id;
    service.incidents(uid, function(err, incidents) {
      res.json({incidents: incidents});
    });
  };

  return line;
};
