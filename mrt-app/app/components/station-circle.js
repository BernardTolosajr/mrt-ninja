import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['color'],
  color: function() {
    return 'circ ' + this.get('name');
  }.property('name')
});
