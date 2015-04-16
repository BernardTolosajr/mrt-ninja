import Ember from 'ember';
import colorMixin from 'mrt-ninja/mixins/color';

export default Ember.ObjectController.extend(colorMixin, {
  maxWeight: 0,
  needs: ['incident-card'],

  refresh: function() {
    var interval = (1 * 1000 * 60);
    Ember.run.later(this, function() {
      console.log('reloading');
      if (this.get('model')) {
        this.get('model.incidents').reload();
      }
      this.refresh();
    }, interval);
  }.on('init'),

  color: function() {
    var incidents = this.get('model.incidents'),
        weights = Ember.A(),
        max = 0,
        type = null;

    this.reportTypes().forEach(function(type) {
      var count = incidents.filterBy('name', type).get('length');
      var color = Ember.Object.create({
        type: type,
        count: count
      });

      weights.pushObject(color);
    });

    weights.forEach(function(weight) {
      if (weight.get('count') > max) {
        max = weight.get('count');
        type = weight.get('type');
      }
    });

    return this.typeColor(type);

  }.property('model.incidents.@each.name')
});
