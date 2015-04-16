import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  host: 'http://128.199.87.40:49159'
  //host: 'http://localhost:3000'
});
