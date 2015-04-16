import Ember from 'ember';
import moment from 'moment';
import colorMixin from './mixins/color';

export default Ember.Component.extend(colorMixin, {
  color: function() {
    var name = this.get('report.name');

    return this.typeColor(name);

  }.property('report.name'),

  currentTimeMetronome: function() {
    var interval = 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  timeRemaining: function() {
    var createAt = this.get('report.createdAt');
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

  shouldShow: function() {
    var remain = this.get('timeRemaining').split(':')[0];
    if (remain <= 0 || remain === 0) {
    }
  }.observes('timeRemaining')

});
