import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('line', {path: '/'}, function() {
    this.route('stations', {path: '/stations/:line_id'});
  });

});

export default Router;
