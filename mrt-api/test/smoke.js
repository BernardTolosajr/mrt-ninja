var utils = require('./utils'),
    expect = require('chai').expect,
    app = require('../server'),
    request = require('supertest'),
    mongoose = require('mongoose');

describe('Smoke test', function() {

  describe('database', function() {
    var Smoke = mongoose.model('Smoke');

    it('should add', function() {
      var smoke = new Smoke({
        value: 'smoken'
      });

      smoke.save(function(err, smoke) {
        expect(err).not.be.exists;
        expect(smoke.value).to.be.eql('smoken');
      });
    });

  });

  describe('integration', function() {

    it('should add smoke', function(done) {
      request(app)
        .post('/smoke')
        .send({value: 'smoken'})
        .expect(201)
        .end(function(err, res) {
          if (err) {return done(err); }
          expect(res.body.value).to.be.eql('smoken');
          done(err);
        });
    });

    it('should fetch smoke', function(done) {
      request(app)
        .get('/smoke')
        .expect(200)
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res.body).to.be.eql('it works');
          done();
        });
    });
  });

});
