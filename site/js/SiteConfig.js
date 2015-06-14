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
                templateUrl: '/templates/partials/home.html'
            },
            'footer': {
                templateUrl: '/templates/partials/footer.html'
            }
        }
    })
    .state('site.blog', {
        url: 'blog',
        views: {
            'content@': {
                templateUrl: '/templates/partials/blog.html'
            }
        }
    })
    .state('site.goods', {
        url: 'goods',
        views: {
            'content@': {
                templateUrl: '/templates/partials/goods.html'
            }
        }
    })
    .state('site.buzz', {
        url: 'buzz',
        views: {
            'content@': {
                templateUrl: '/templates/partials/buzz.html'
            }
        }
    })
    .state('site.us', {
        url: 'us',
        views: {
            'content@': {
                templateUrl: '/templates/partials/us.html'
            }
        }
    });
};
