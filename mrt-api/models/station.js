'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var stationSchema = mongoose.Schema({
  name: String,
  line: {type: Schema.Types.ObjectId, ref: 'Line'},
  order: Number
});

mongoose.model('Station', stationSchema);
