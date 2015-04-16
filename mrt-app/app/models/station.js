import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  incidents: DS.hasMany('incident', {async: true}),
  line: DS.belongsTo('line', {async: true}),
  order: DS.attr('number')
});
