'use strict';

module.exports = function(service) {
  var smoke = {};

  smoke.get = function(req, res) {
    res.json('it works');
  }

  smoke.create = function(req, res) {
    var param = req.body;

    service.create(param.value, function(err, result) {
      if (err) { res.status(422).json({error: err}); }
      res.status(201).json(result);
    });
  }

  return smoke;
};
