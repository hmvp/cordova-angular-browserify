'use strict';

require('angular');
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');
require('ionic');
require('ionic-angular');
require('ng-cordova');


function run ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
}

module.exports = angular.module('MyApp', [
  'ionic',
  require('./filters').name,
  require('./constants').name,
  require('./services').name,
  require('./factories').name,
  require('./controllers').name,
  require('./directives').name
]).run(run);
