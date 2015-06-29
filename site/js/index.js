var angular   = require('angular');
var SiteConfig = require('./SiteConfig');

require('../less/normalize.less');
require('../less/main.less');

angular
  .module('RsgWebsite', [require('angular-ui-router'), require('angular-animate')])
  .config(SiteConfig);
