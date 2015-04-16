'use strict';

var bodyParser = require('body-parser'),
    cors = require('cors');

module.exports = function(express) {
  express.use(bodyParser.json());
  express.use(cors());

  express.use(bodyParser.urlencoded({
    extended: false
  }));
};
