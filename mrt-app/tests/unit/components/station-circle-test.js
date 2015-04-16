import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('station-circle', 'StationCircleComponent', {
});

test('it renders', function() {
  expect(2);
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('changin colors', function() {
  var component = this.subject();

  Ember.run(function() {
    component.set('name', 'red');
  });

  equal(this.$().attr('class'), 'ember-view circ red');

  Ember.run(function() {
    component.set('name', 'blue');
  });

  equal(this.$().attr('class'), 'ember-view circ blue');
});
