'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Station = require('../models/station');

var lineSchema = mongoose.Schema({
  name: String,
  bound: String,
  stations: [{ type: Schema.Types.ObjectId, ref: 'Station' }]
});

mongoose.model('Line', lineSchema);
