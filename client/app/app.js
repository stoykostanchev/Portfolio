angular.module('projectX', 
    ['ui.router', 'ngResource', 'ngSanitize', 'ngAnimate']
).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state("blog", {
        url    : '/blog',
        views  : { 
            ''           : { 
                templateUrl : "app/blog/blog.html"
            },
            'list@blog' : {
                templateUrl : 'app/blog/list/list.html',
                controller  : 'PostsController'
            },
            'post@blog' : {
                templateUrl : 'app/blog/post/post.html',
                controller  : 'LatestPostCtrl'
            }
        }
    })
    .state("blog.post", {
        url    : '/post/{postUrlId}',
        views  : { 
            'post@blog' : {
                templateUrl : 'app/blog/post/post.html',
                controller  : 'PostCtrl'
            }
        }
    })
    .state('home', {
        url   : '/home',
        views : {
            '' : {
                templateUrl : 'app/home/home.html'
            },
            'news@home' : {
                templateUrl : 'app/home/news/news.html',
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
                templateUrl : 'app/tutorials/tutorials.html'
            }
        }
    })
    .state('tutor.display', {
        url         : '^/howto/:urlId',
        views       : {
            'mainview@tutor' : {
                controller  : 'TutorCtrl',
                templateUrl : 'app/tutorials/tutorial/tutorial.html'
            }
        }
    })
    .state('contact', {
        url         : '/contact',
        controller  : 'ContactsCtrl',
        templateUrl : 'app/contact/contact.html'
    })
    .state('projects', {
        url      : '/projects',
        views  : { 
            '' : {
                template : '<section ui-view="view" class="module main-brdr module-projects main-bgclr-alt"></section>'  
            },
            'view@projects' : {
                templateUrl : 'app/projects/list/list.html',
                controller  : 'ProjectsListCtrl'
            }
        }
    })
    .state('projects.project', {
        url : '^/project/:projectId',
        views  : { 
            'view@projects' : {
                templateUrl : 'app/projects/project/project.html',
                controller  : 'ProjectCtrl'
            }
        }
    })
    .state('about', {
        url : '/about',
        templateUrl : 'app/about/about.html'
    });;
}]);