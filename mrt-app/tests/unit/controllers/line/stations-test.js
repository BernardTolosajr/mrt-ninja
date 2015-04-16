import Ember from 'ember';
import startApp from 'mrt-ninja/tests/helpers/start-app';
import api from 'mrt-ninja/tests/helpers/api';

import {
  moduleFor,
  test
} from 'ember-qunit';

var App, server, controller, store;

moduleFor('controller:line/stations', 'LineStationsController', {
  setup: function() {
    App = startApp();
    App.__container__.lookup('adapter:application').set('host', '');
    store = App.__container__.lookup('store:main');
    controller = App.__container__.lookup('controller:line/stations');

    server = api();

    visit('/stations/1');
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});
