var angular   = require('angular');
var SiteConfig = require('./SiteConfig');

angular
  .module('RsgWebsite', [require('angular-ui-router')])
  .config(SiteConfig);
