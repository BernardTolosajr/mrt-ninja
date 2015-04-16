var utils = require('../utils'),
    expect = require('chai').expect,
    app = require('../../server'),
    mongoose = require('mongoose'),
    request = require('supertest'),
    Line = require('../factory/line'),
    Station = require('../factory/station'),
    moment = require('moment'),
    date = require('../../lib/date'),
    activity = require('../../lib/activity');

var Incident = mongoose.model('Incident');

describe('Station', function() {
  var stationId = null;
  var lineId = null;

  beforeEach(function(done) {
    Line.create({name:'MRT'}, function(err, line) {
      lineId = line._id;

      Station.create({name: 'Ayala', line: line._id}, function(err, station) {
        if (err) { console.log(err); }
        stationId = station._id;

        var incident = new Incident({
            name: 'delayed',
            station: stationId,
            line: line._id,
            bound: 'south'
        });

        incident.save(function(err, res) {
          if (err) { console.log(err); }
          /*
          activity.post(stationId, res.id, function(err, reply) {
            if (err) { console.log(err); }
          });
          */

          console.log('tracking ==> ', lineId);
          activity.track(stationId, incident.id, date.unixstamp(), function(err, reply) {
            if (err) { console.log(err); }
            done();
          });

        });
      });
    });
  });

  //TODO weak
  it('#find all', function(done) {
    //stations?ids%5B%5D=5503cc968b5d7c3012f1bf34&ids%5B%5D=5503cc968b5d7c3012f1bf35
    request(app)
      .get('/stations?ids%5B%5D='+ stationId)
      .expect(200)
      .end(function(err, res) {
        if (err) { done(err); }
        var stations = res.body.stations;
        expect(stations).to.be.not.empty;
        expect(stations[0].name).to.be.eql('Ayala');
        expect(stations[0].links.incidents).to.be.equal('/stations/' + stationId + '/incidents');
        done();
      });
  });

  it('#findIncidents', function(done) {
    console.log('line ==>', lineId);
    request(app)
      .get('/stations/' + stationId + '/incidents')
      .expect(200)
      .end(function(err, res) {
        if (err) {return done(err); }
        expect(res.body.incidents).not.to.be.empty;
        done();
      });
  });

  afterEach(function() {
    lineId = null;
    Line.remove({name: 'MRT'}, function(err) {
      if (err) {
        console.log(err);
      }
    });

    Station.remove({name: 'Ayala'}, function(err) {
      if (err) {
        console.log(err);
      }
    });
  });

});
