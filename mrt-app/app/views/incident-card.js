import Ember from 'ember';
import moment from 'moment';
import colorMixin from 'mrt-ninja/mixins/color';

export default Ember.View.extend(colorMixin, {
  templateName: 'incident-card',
  success: false,
  actions: {
    confirm: function() {
      var incident = this.get('content');
      var controller = this.get('controller.controllers.incident-card');
      if (controller) {
        controller.send('confirm', incident);
      }
    }
  },

  didInsertElement: function() {
    var controller = this.get('controller.controllers.incident-card');
      controller.on('addConfirmation', this, this.addConfirmation);
  },

  willDestroyElement: function() {
    var controller = this.get('controller.controllers.incident-card');
      controller.off('addConfirmation', this, this.addConfirmation);
  },

  addConfirmation: function() {
    this.incrementProperty('votes');
  },

  votes: function() {
    var incident = this.get('content');
    return incident.get('votes');
  }.property('votes'),

  color: function() {
    var name = this.get('content.name');
    return this.typeColor(name);
  }.property('content.name'),

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  timeRemaining: function() {
    var createAt = this.get('content.createdAt');
    var then = moment(createAt).add('5', 'minutes');
    var now = moment();
    var ms = then.diff(now, 'milliseconds', true);
    var seconds = Math.floor(moment.duration(ms).asSeconds());

    var divisor_for_minutes = seconds % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = seconds % 60;

    var remaining = minutes + ':' + divisor_for_seconds;

    return remaining;
  }.property('currentTimePulse'),

  clear: function() {
    var remaining = this.get('timeRemaining').split(':');
    if (remaining[0] < 0 && remaining[1] < 0) {
      this.remove();
    }
  }.observes('timeRemaining')
});
