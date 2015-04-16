import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('report-time', 'ReportTimeComponent', {
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

test('changin colors', function() {
  var component = this.subject();

  Ember.run(function() {
    component.set('name', 'red');
  });

  equal(this.$().attr('class'), 'ember-view time red-text');

  Ember.run(function() {
    component.set('name', 'blue');
  });

  equal(this.$().attr('class'), 'ember-view time blue-text');
});
