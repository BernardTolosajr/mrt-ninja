var utils = require('../utils'),
    expect = require('chai').expect,
    app = require('../../server'),
    mongoose = require('mongoose'),
    request = require('supertest'),
    Line = require('../factory/line');

var Station = mongoose.model('Station');

describe('Incident', function() {
  var stationId = null;
  var lineId = null;

  before(function() {
    Line.create(null, function(err, line) {
      lineId = line.id;
    });

    var station = new Station({
      name: 'Ayala'
    });

    station.save(function(err, res) {
      if (err) { console.log(err); }
      stationId = res.id;
    });
  });

  after(function() {
    Line.remove({}, function() {});
    Station.remove({name: 'Ayala'}, function() {});
  });

  describe('Report', function() {
    it('should add', function(done) {
      var param = {incident: {
          name: 'delayed',
          station: stationId,
          line: lineId,
          bound: 'south'
        }
      };

      request(app)
        .post('/incidents')
        .send(param)
        .expect(201)
        .end(function(err, res) {
          if (err) {return done(err); }
          var incident = res.body.incident;
          expect(incident.line).to.be.eql(lineId);
          expect(incident.name).to.be.eql('delayed');
          done(err);
        });
    });

  });

  describe('upvotes', function() {
    var data = null;

    beforeEach(function(done) {
      var Incident = mongoose.model('Incident');
      var incident = new Incident({
        name: 'delayed',
        station: stationId,
        line: lineId,
        bound: 'south'
      });

      incident.save(function(err, doc) {
        data = doc;
        done();
      });
    });

    it('should return success', function(done) {
      request(app)
        .post('/incidents/' + data.id + '/upvotes')
        .expect(200)
        .end(function(err, res) {
          if (err) {return done(err); }
          var votes = res.body.votes;
          expect(votes).to.be.eql(1);
          done();
        });

    });
  });
});
