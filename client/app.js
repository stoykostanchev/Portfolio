angular.module('projectX', 
    ['ui.router', 'ngResource', 'ngSanitize', 'ngAnimate']
).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.otherwise('/home');
    $stateProvider
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
        url    : '/post/{postUrlId}',
        views  : { 
            'post@blog' : {
                templateUrl : 'modules/blog/views/display.html',
                controller  : 'PostDisplayCtrl'
            }
        }
    })
    .state('home', {
        url   : '/home',
        views : {
            '' : {
                templateUrl : 'modules/home/home.html'
            },
            'news@home' : {
                templateUrl : 'modules/home/views/news.html',
                controller  : 'NewsCtrl'
            }
        }
    })
    .state('tutor', {
        url         : '/howtos',
        views       : {
            '' : {
                template    : "<div ui-view='mainview' class='module main-brdr module-tutor main-bgclr-alt'></div>",
            }, 
            'mainview@tutor' :{
                controller  : 'TutorsController',
                templateUrl : 'modules/tutor/views/search.html'
            }
        }
    })
    .state('tutor.display', {
        url         : '^/howto/:urlId',
        views       : {
            'mainview@tutor' : {
                controller  : 'TutorCtrl',
                templateUrl : 'modules/tutor/views/tutorial.html'
            }
        }
    })
    .state('contact', {
        url         : '/contact',
        controller  : 'ContactsCtrl',
        templateUrl : 'modules/contact/contact.html'
    })
    .state('projects', {
        url      : '/projects',
        views  : { 
            '' : {
                template : '<div ui-view="view" class="module main-brdr module-projects main-bgclr-alt"></div>'  
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
    })
    .state('about', {
        url : '/about',
        templateUrl : 'modules/about/about.html'
    });;
}]);