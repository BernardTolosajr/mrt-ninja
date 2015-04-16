'use strict';

var mongoose = require('mongoose'),
    Incident = mongoose.model('Incident'),
    Station = mongoose.model('Station'),
    Line = mongoose.model('Line'),
    Smoke = mongoose.model('Smoke');

var activity  = require('../lib/activity');

var smokeRepository = require('../lib/repositories/smoke')(Smoke);
var smokeService = require('../lib/services/smoke')(smokeRepository);
var smokeController = require('../controllers/smoke')(smokeService);

var incidentRepository = require('../lib/repositories/incident')(Incident);
var incidentService = require('../lib/services/incident')(incidentRepository, activity);
var incidentController = require('../controllers/incident')(incidentService);

var stationRepository = require('../lib/repositories/station')(Station);
var stationService = require('../lib/services/station')(stationRepository);
var stationController = require('../controllers/station')(stationService);

var lineRepository = require('../lib/repositories/line')(Line);
var lineService = require('../lib/services/line')(lineRepository);
var lineController = require('../controllers/line')(lineService);

module.exports = function(router) {

  router.route('/smoke')
    .get(smokeController.get)
    .post(smokeController.create);

  router.route('/incidents')
    .post(incidentController.create)

  router.post('/incidents/:id/upvotes', incidentController.upvotes)

  router.route('/stations')
    .get(stationController.getAll)

  router.get('/stations/:id/incidents', incidentController.findBy);

  router.route('/lines')
    .get(lineController.get)

  router.get('/lines/:id/incidents', lineController.incidents);
};
