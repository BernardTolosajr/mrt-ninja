import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('incident', 'Incident', {
  needs: ['models:station']
});
