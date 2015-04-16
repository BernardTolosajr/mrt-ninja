import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bound: DS.attr('string'),
  stations: DS.hasMany('station', {async: true})
});
