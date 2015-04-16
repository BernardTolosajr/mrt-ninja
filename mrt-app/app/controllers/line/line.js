import Ember from 'ember';
import ajax from 'ic-ajax';
import config from 'mrt-ninja/config/environment';

export default Ember.ObjectController.extend({
  fetchIncidents: function() {
    var lineId = this.get('id');

    //TODO move this somewhere
    var host = null;
    if (config.environment === 'production') {
      host = window.MrtNinja.HOST
    } else if (config.environment === 'development') {
      host = 'http://localhost:3000'
    }

    if (lineId) {
      ajax({
        url: host + '/lines/'+ lineId +'/incidents',
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
