(function() {

    angular
        .module('RsgPutlamu', ['ui.router'])
        .config(AppConfig);

      /*@ngInject*/
      function AppConfig($stateProvider, $urlRouterProvider) {
          console.log('hello world!');
      }

})();
