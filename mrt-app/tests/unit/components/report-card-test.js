import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

var reportTypes = [
  {name: 'Delayed train'},
  {name: 'Train too crowded to board'},
  {name: 'Overcrowded platform'},
  {name: 'Overcrowded train'},
  {name: 'Train stopped between stations'},
  {name: 'Disabled train'},
  {name: 'Medical emergency'},
  {name: 'Police action'},
  {name: 'Normal conditions'}
];

moduleForComponent('report-card', 'ReportCardComponent', {
  needs: ['component:station-circle', 'component:report-time', 'component:report-title']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('color', function() {
  expect(2);

  var component = this.subject();

  Ember.run(function() {
    component.set('report', Ember.Object.create({name:'Delayed train'}));
  });

  equal(component.get('color'), 'red');

  Ember.run(function() {
    component.set('report', Ember.Object.create({name:'Train too crowded to board'}));
  });

  equal(component.get('color'), 'orange');
});
