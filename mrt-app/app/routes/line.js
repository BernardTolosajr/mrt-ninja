import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model){
    this._super(controller, model);
    //this.currentTimeMetronome(controller);
  },

  currentTimeMetronome: function(controller) {
    var interval = 1000;
    Ember.run.later(this, function() {
      controller.refresh();
      this.currentTimeMetronome(controller);
    }, interval);
  },

  model: function() {
    return this.store.find('line');
  }
});
