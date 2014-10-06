angular.module('projectX', 
    ['ui.router', 'ngResource']
).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.when('', '/Posts');
    $stateProvider
    .state("home", {
        url        : ''
    })
    .state("posts", {
        url    : '/Posts',
        views  : { 
            ''           : { 
                templateUrl : "modules/blog/blog.html"
            },
            'list@posts' : {
                templateUrl : 'modules/blog/views/list.html',
                controller  : 'PostsController'
            },
            'post@posts' : {
                templateUrl : 'modules/blog/views/display.html',
                controller  : 'LastestPostCtrl'
            }
        }
    })
    .state("posts.post", {
        url    : '^/Post/{postId}',
        views  : { 
            'post@posts' : {
                templateUrl : 'modules/blog/views/display.html',
                url         : '/Post/:postId',
                controller  : 'PostDisplayCtrl'
            }
        }
    })
    .state('about', {
        url         : '/About',
        templateUrl : 'modules/about/about.html'
    })
    .state('contact', {
        url         : '/Contact',
        templateUrl : 'modules/contact/contact.html'
    })
    .state('projects', {
        url         : '/Projects',
        templateUrl : 'modules/projects/projects.html'
    });
}]);