import Ember from 'ember';
import startApp from 'mrt-ninja/tests/helpers/start-app';
import api from 'mrt-ninja/tests/helpers/api';

import {
  moduleFor,
  test
} from 'ember-qunit';

var server,
    store,
    App,
    controller;

moduleFor('controller:report-modal', 'ReportModalController', {
  setup: function() {
    App = startApp();
    App.__container__.lookup('adapter:application').set('host', '');
    store = App.__container__.lookup('store:main');
    controller = App.__container__.lookup('controller:report-modal');

    server = api();
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

/*
test('it add new report', function() {
  expect(1);

  store.scheduleSave = function(context, resolver) {
    ok(resolver.promise); // The actual assert
    resolver.resolve(context);
  };

  Ember.run(function() {
    var station = store.createRecord('station', {
      id: 1,
      name: 'Ayala'
    });

    controller.set('selectedType', 'Late train');
    controller.set('selectedStation', station);
    controller.send('save');
  });
});
*/
