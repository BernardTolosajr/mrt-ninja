var utils = require('../utils'),
    expect = require('chai').expect,
    app = require('../../server'),
    mongoose = require('mongoose'),
    request = require('supertest'),
    Line = require('../factory/line'),
    Station = require('../factory/station'),
    moment = require('moment'),
    date = require('../../lib/date'),
    Activity = require('../../lib/activity');

describe('line', function() {

  var lineId = null;

  before(function() {
    Line.create(null, function(err, line) {
      Station.create({name: 'Ayala', line: line._id}, function(err, station) {
        Activity.track(line.id, station.id, date.unixstamp(), function(err, reply) {
          console.log('tracking incident ', reply);
        });
      });

      lineId = line.id;
    });
  });

  after(function() {
    Line.remove({}, function() {});
    Station.remove({name: 'Ayala'}, function() {});
  });

  it('should fetch all', function(done) {
    request(app)
      .get('/lines')
      .expect(200)
      .end(function(err, res) {
        if (err) { return done(err); }
        expect(res.body.lines).to.be.not.empty;
        expect(res.body.lines[0].name).to.be.eql('MRT');
        done();
      });
  });

  it('should track active incident', function(done) {
    request(app)
      .get('/lines/' + lineId + '/incidents')
      .expect(200)
      .end(function(err, res) {
        if (err) { return done(err); }
        expect(res.body.incidents).to.be.not.empty;
        done();
      });
  });

});
