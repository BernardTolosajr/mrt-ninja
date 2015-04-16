import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('station-title', 'StationTitleComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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

test('changing colors', function() {
  var component = this.subject();

  Ember.run(function() {
    component.set('name', 'red');
  });

  equal(this.$().attr('class'), 'ember-view red');
});
