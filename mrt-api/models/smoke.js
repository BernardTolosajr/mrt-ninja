'use strict';

var mongoose = require('mongoose');

var smokeSchema = mongoose.Schema({
  value: String
});

mongoose.model('Smoke', smokeSchema);
