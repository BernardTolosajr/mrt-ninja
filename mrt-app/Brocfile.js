/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('app/styles/bootstrap.css');
app.import('bower_components/Bootflat/bootflat/css/bootflat.css.map', {
  destDir: 'assets'
});
app.import('bower_components/Bootflat/bootflat/css/bootflat.css');
app.import('bower_components/materialize/dist/css/materialize.css');
app.import('bower_components/materialize/dist/js/materialize.js');

module.exports = app.toTree();
