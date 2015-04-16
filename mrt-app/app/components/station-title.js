import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'dt',
  classNameBindings: ['color'],
  color: function() {
    return this.get('name');
  }.property('color')
});
