import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.ObjectController.extend(Ember.Evented, {
  actions: {
    confirm: function(incident) {
      ajax({
        url: '/incidents/'+ incident.get('id') +'/upvotes',
        type: 'POST',
        contentType: 'application/json',
      }).then(function(response) {
        if (response.votes) {
          this.trigger('addConfirmation');
        }
      }.bind(this), function(err) {
        console.log(err);
      });
    }
  }
});
