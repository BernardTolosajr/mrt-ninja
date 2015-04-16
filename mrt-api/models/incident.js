'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var incidentSchema = mongoose.Schema({
  name: String,
  line: {type: Schema.ObjectId, ref: 'Line'},
  station: {type: Schema.ObjectId, ref: 'Station'},
  bound: String,
  createdAt: {type: Date, default: Date.now},
  lastConfirmedAt: {type: Date, default: Date.now},
  votes: {type: Number, default: 0}
});

mongoose.model('Incident', incidentSchema);
