import Ember from 'ember';
import startApp from 'mrt-ninja/tests/helpers/start-app';
import api from 'mrt-ninja/tests/helpers/api';

var App, server;

module('Integration - Home Page', {
  setup: function() {
    App = startApp();
    App.__container__.lookup('adapter:application').set('host', '');
    server = api();
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('should display line', function() {
  visit('/');
  andThen(function() {
    equal(find("div.collection .mrt-south:contains('MRT')").length, 1, 'find MRT line');
  });
});

test('should navidate to stations', function() {
  visit('/');
  click('a.mrt-south');
  andThen(function() {
    equal(find('span.card-title').text().trim(), 'MRT - South');
    equal(currentURL(), '/stations/1', 'correct URL');
  });
});

