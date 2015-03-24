'use strict';

// Require all services here
module.exports = angular.module('MyApp.services', [])
  .service('Auth', require('./Auth.js'));
