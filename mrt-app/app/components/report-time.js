import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'time',
  classNameBindings: ['color'],
  color: function() {
    return this.get('name') + '-text';
  }.property('name')
});
