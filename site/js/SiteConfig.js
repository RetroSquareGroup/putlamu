/*@ngInject*/
module.exports = function SiteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('site',{
            url: '/',
            views: {
                'header': {
                    templateUrl: '/templates/partials/header.html'
                },
                'content': {
                    templateUrl: '/templates/partials/content.html'
                },
                'footer': {
                    templateUrl: '/templates/partials/footer.html'
                }
            }
        });
};
