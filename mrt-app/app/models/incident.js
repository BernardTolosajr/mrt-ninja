import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  votes: DS.attr('number'),
  line: DS.attr('string'),
  station: DS.belongsTo('station', {async: true}),
  createdAt: DS.attr('date')
});
