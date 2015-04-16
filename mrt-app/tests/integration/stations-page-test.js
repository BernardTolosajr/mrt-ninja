import Ember from 'ember';
import startApp from 'mrt-ninja/tests/helpers/start-app';
import api from 'mrt-ninja/tests/helpers/api';

var App, server;

module('Integration - Stations Page', {
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

test('should navigate to stations', function() {
  visit('/stations/1');
  andThen(function() {
    equal(currentURL(), '/stations/1', 'correct URL');
  });
});

test('should navidate back to home', function() {
  visit('/stations/1');
  click('i');
  andThen(function() {
    equal(currentURL(), '/', 'correct URL');
  });
});

test('should display stations', function() {
  visit('/stations/1');
  andThen(function() {
    equal(find('dl dt:first').text().trim(), 'Ayala');
  });
});

/*
test('should display incidents', function() {
  visit('/stations');
  andThen(function() {
    equal(find('dl dd.pos-right:first').text().trim(), 'Ayala');
  });
});
*/
