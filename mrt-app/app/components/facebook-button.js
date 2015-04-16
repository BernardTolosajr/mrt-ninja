import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fb-share-button'],
  tagName: 'div',
  attributeBindings: [
    'data-href',
    'data-layout',
    'data-action',
    'data-show-faces',
    'data-share'
  ],

  setup: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      FB.XFBML.parse();
    });
  }.on('didInsertElement')
});
