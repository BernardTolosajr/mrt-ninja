import Ember from 'ember';

var reportTypes = [
  'Delayed train',
  'Train too crowded to board',
  'Overcrowded platform',
  'Overcrowded train',
  'Train stopped between stations',
  'Disabled train',
  'Medical emergency',
  'Police action',
  'Normal conditions'
];

export default Ember.Controller.extend({
  needs: ['line/stations'],
  //TODO feel so wrong, but i need to ship :)
  stations: Ember.computed.alias('controllers.line/stations.stations'),
  types: reportTypes,
  selectedType: null,
  selectedStation: null,
  actions: {
    save: function() {
      var store = this.get('store'),
          line = this.get('model'),
          name = this.get('selectedType'),
          station = this.get('selectedStation'),
          self = this;

        if (name && station) {
          var report = store.createRecord('incident', {
            name: name,
            station: station,
            line: line.get('id')
          });

          report.save().then(function() {
            self.send('removeModal');
          }, function(err) {
            console.log('error', err);
          });
        } else {
          self.send('removeModal');
        }
    }
  }
});
