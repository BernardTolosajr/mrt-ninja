import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:line', 'LineController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

//TODO weak test
test('incident count', function() {
  expect(1);

  var subject = this.subject();

  var incident = Ember.Object.create({name: 'delayed'});

  var incidents = [incident];

  var line = Ember.Object.create({incidents: incidents, name: 'MRT'});

  subject.set('model', line);

  equal(subject.get('totalIncidents'), 0);
});
