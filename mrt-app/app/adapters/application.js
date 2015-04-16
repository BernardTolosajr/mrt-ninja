import DS from 'ember-data';
import config from 'mrt-ninja/config/environment';

var host = null;
if (config.environment === 'production') {
  host = window.MrtNinja.HOST
} else if (config.environment === 'development') {
  host = 'http://localhost:3000'
}

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  host: host
});
