angular.module('projectX', 
    ['ui.router', 'ngResource']
).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.when('', '/blog')
        .otherwise('/blog');
    $stateProvider
    .state("home", {
        url        : ''
    })
    .state("blog", {
        url    : '/blog',
        views  : { 
            ''           : { 
                templateUrl : "modules/blog/blog.html"
            },
            'list@blog' : {
                templateUrl : 'modules/blog/views/list.html',
                controller  : 'PostsController'
            },
            'post@blog' : {
                templateUrl : 'modules/blog/views/display.html',
                controller  : 'LastestPostCtrl'
            }
        }
    })
    .state("blog.post", {
        url    : '/post/{postId}',
        views  : { 
            'post@blog' : {
                templateUrl : 'modules/blog/views/display.html',
                controller  : 'PostDisplayCtrl'
            }
        }
    })
    .state('about', {
        url         : '/about',
        templateUrl : 'modules/about/about.html'
    })
    .state('contact', {
        url         : '/contact',
        templateUrl : 'modules/contact/contact.html'
    })
    .state('projects', {
        url      : '/projects',
        views  : { 
            '' : {
                template : '<div ui-view="view"></div>'  
            },
            'view@projects' : {
                templateUrl : 'modules/projects/views/extendedList.html',
                controller  : 'ProjectsExtendedListController'
            }
        }
    })
    .state('projects.project', {
        url : '^/project/:projectId',
        views  : { 
            'view@projects' : {
                templateUrl : 'modules/projects/views/display.html',
                controller  : 'ProjectDisplayController'
            }
        }
    });
}]);