'use strict';

var moment = require('moment');

module.exports = {
  unixstamp: function() {
    return moment().unix();
  }
};
