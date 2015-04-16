import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ok: function() {
      this.$('.modal').closeModal();
      this.sendAction('ok');
    }
  },

  show: function() {
    var self = this;
    this.$('.modal').openModal({
      dismissible: true,
      opacity: '.5',
      in_duration: 300,
      out_duration: 200,
      complete: function() {
        self.sendAction('close');
      }
    });
  }.on('didInsertElement')
});
