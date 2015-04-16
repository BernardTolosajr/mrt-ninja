import Ember from 'ember';
import startApp from 'mrt-ninja/tests/helpers/start-app';
import Pretender from 'pretender';

import {
  moduleFor,
  test
} from 'ember-qunit';

var App, server, controller, store;

moduleFor('controller:stations', 'StationsController', {
  setup: function() {
    App = startApp();
    App.__container__.lookup('adapter:application').set('host', '');
    store = App.__container__.lookup('store:main');
    controller = App.__container__.lookup('controller:stations');

    var stations = [
        {
          _id: 1,
          name: 'Ayala',
          incidents: [],
        },{
          _id: 2,
          name: 'Magallanes',
          incidents: [],
        },{
          _id: 3,
          name: 'Taft',
          incidents: [],
        }
    ];

    server = new Pretender(function() {
      this.get('/stations/:id', function(request) {
        var station = {
          id: 1,
          name: 'Ayala'
        };

        return [200, {"Content-Type": "application/json"}, JSON.stringify({station: station})];
      });

      this.get('/stations', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({stations: stations})];
      });

      this.post('/incidents', function(request) {
        var param = JSON.parse(request.requestBody);

        var incident = {
          id: 1,
          type: param.incident.type,
          station: 1,
          message: param.incident.message
        };

        return [200, {"Content-Type": "application/json"},
          JSON.stringify({incident: incident})];
      });
    });

    visit('/stations');
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

/*
test('it add new incident', function() {
  expect(2);

  var stations = controller.get('content');
  equal(stations.get('length'), 3, 'stations must 3');

  Ember.run(function() {
    store.find('station', 1).then(function(station) {
      var incident = store.createRecord('incident', {
        type: 'Late',
        name: 'a',
        station: station,
        message: 'foo'
      });

      controller.send('addIncident', incident);
    });
  });

  var station = stations.findBy('name', 'Ayala');
  equal(station.get('incidents').get('length'), 1, 'must 1 incident');
});
*/
