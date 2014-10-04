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
                templateUrl : "templates/posts.html"
            },
            'list@posts' : {
                templateUrl : 'templates/posts/list.html',
                controller  : 'PostsController'
            },
            'post@posts' : {
                templateUrl : 'templates/posts/display.html'
            }
        }
    })
    .state("posts.post", {
        url    : '^/Post/{postId}',
        views  : { 
            'post@posts' : {
                templateUrl : 'templates/posts/display.html',
                url         : '/Post/:postId',
                controller  : 'PostDisplayCtrl'
            }
        }
    })
    .state('about', {
        url         : '/About',
        templateUrl : 'templates/about.html'
    })
    .state('contact', {
        url         : '/Contact',
        templateUrl : 'templates/contact.html',
        controller  : 'ContactsController'
    })
    .state('projects', {
        url         : '/Projects',
        templateUrl : 'templates/projects.html',
        controller  : 'ProjectsController'
    });
}]);