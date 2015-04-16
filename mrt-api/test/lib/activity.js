var expect = require('chai').expect,
    redis = require('redis'),
    moment = require('moment'),
    client = redis.createClient(),
    date = require('../../lib/date'),
    Activity = require('../../lib/activity');

describe('Activity', function() {
  describe('#post', function() {
    var key = '1234';
    it('shoud create post', function() {
      var value = '4567';
      Activity.post(key, value, function(err, reply) {
        expect(reply[0]).to.be.eql(1);
        expect(reply[1]).to.be.eql(1);
      });
    });

    it('should fetch post', function() {
      Activity.posts(key, function(err, reply) {
        expect(reply).to.be.not.empty;
      });
    });

    after(function() {
      client.del('activity:station:' + key, function(err, reply) {
      });
    });
  });

  describe('incidents', function() {
    var key = '1234';

    it('should add new using sadd', function() {
      var value = '4321'
      Activity.add(key, value, function(err, reply) {
        if (err) { console.log(err); }
        expect(reply[0]).to.be.eql(1);
      });
    });

    it('should total', function() {
      Activity.incidentCount(key, function(err, reply) {
        if (err) { console.log(err); }
        expect(reply).to.be.eql(1);
      });
    });

    after(function() {
      client.del('activity:line:' + key, function(err, reply) {
      });
    });

  });

  describe('track incidents', function() {
    var key = '1234'; //aka lineId

    it('should add', function() {
      var now = date.unixstamp();
      var id = '4321';

      Activity.track(key, id, now, function(err, reply) {
        expect(reply).to.be.eql(1);
      });
    });

    it('should count last 5 minutes incident', function() {
      var ago = date.unixstamp() - (60 * 5);

      Activity.active(key, ago, function(err, reply) {
        expect(reply).to.be.not.empty;
      });
    });

    after(function() {
      client.del('activity:incident:' + key, function(err, reply) {
      });
    });
  });

});
