import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h4',
  classNames: 'events-heading',
  classNameBindings: ['color'],
  color: function() {
    return this.get('name') + '-text';
  }.property('name')
});
