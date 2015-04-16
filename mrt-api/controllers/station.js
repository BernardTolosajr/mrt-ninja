'use strict';
var Qs = require('qs');

module.exports = function(service) {
  var station = {};

  station.getAll = function(req, res) {
    var query = req.query;
    var param = Qs.parse(query);

    service.getAll(param.ids, function(err, stations) {
      console.log(err);
      if (err) { res.status(422).json({error: err}); }
      res.json({stations: stations});
    });
  };

  return station;
};
