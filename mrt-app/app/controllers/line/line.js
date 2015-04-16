import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.ObjectController.extend({
  fetchIncidents: function() {
    var lineId = this.get('id');
    if (lineId) {
      ajax({
        url: 'http://128.199.87.40:49159/lines/'+ lineId +'/incidents',
        type: 'GET',
        contentType: 'application/json',
      }).then(function(response) {
        var incidents = response.incidents;
        var count = incidents.length;
        this.set('totalIncidents', count);
      }.bind(this), function(err) {
        console.log(err);
      });
    }
  },

  count: function() {
    this.fetchIncidents();
    var interval = (1 * 1000 * 60);
    Ember.run.later(this, function() {
      this.count();
    }, interval);
  }.on('init'),

  totalIncidents: function() {
    return 0;
  }.property('totalIncidents')
});
