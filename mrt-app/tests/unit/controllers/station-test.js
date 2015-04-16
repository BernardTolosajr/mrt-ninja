import Ember from 'ember';

//TODO redundant
var reportTypes = [
  'Delayed train',
  'Train too crowded to board',
  'Overcrowded platform',
  'Overcrowded train',
  'Train stopped between stations',
  'Disabled train',
  'Medical emergency',
  'Police action',
  'Normal conditions'
];

import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:station', 'StationController', {
  needs: ['controller:incident-card']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('color change', function() {
  expect(1);
  var controller = this.subject();

  var a = Ember.Object.create({name: 'Delayed train'});
  var b = Ember.Object.create({name: 'Delayed train'});
  var c = Ember.Object.create({name: 'Train too crowded to board'});

  var incidents = [a, b, c];

  var model = Ember.Object.create({
    name: 'Ayala',
    incidents: incidents
  });

  controller.set('model', model);

  equal(controller.get('color'), 'grey');
});
