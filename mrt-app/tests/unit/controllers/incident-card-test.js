import startApp from 'mrt-ninja/tests/helpers/start-app';
import api from 'mrt-ninja/tests/helpers/api';
import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

var store, App, server;

moduleFor('controller:incident-card', 'IncidentCardController', {
  setup: function() {
    App = startApp();
    store = App.__container__.lookup('store:main');
    server = api();
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

/*
test('add confirmation', function() {
  expect(1);
  var controller = this.subject();

  Ember.run(function() {
    var station = store.createRecord('station', {
      id: 1,
      name: 'Ayala'
    });

    var incident = store.createRecord('incident', {
      id: 1,
      station: station
    });

    controller.send('confirm', incident);
    equal(controller.votes, 1, 'should equal 1');
  });
});
*/
