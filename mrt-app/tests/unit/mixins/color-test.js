import Ember from 'ember';
import ColorMixin from 'mrt-ninja/mixins/color';

module('ColorMixin');

// Replace this with your real tests.
test('it works', function() {
  var ColorObject = Ember.Object.extend(ColorMixin);
  var subject = ColorObject.create();
  ok(subject);
});
