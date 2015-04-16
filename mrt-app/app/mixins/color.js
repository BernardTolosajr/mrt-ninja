import Ember from 'ember';

export default Ember.Mixin.create({
  typeColor: function(type) {
    switch(type) {
      case 'Delayed train':
        return 'red';
      case 'Train too crowded to board':
        return 'orange';
      case 'Overcrowded platform':
        return 'red';
      case 'Overcrowded train':
        return 'red';
      case 'Train stopped between stations':
        return 'orange';
      case 'Disabled train':
        return 'red';
      case 'Medical emergency':
        return 'red';
      case 'Police action':
        return 'red';
      case 'Normal conditions':
        return 'green';
      default:
        return 'grey';
    }
  },

  reportTypes: function() {
    return [
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
  }
});
