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
angular.module('projectX')
    .controller('PostsController', ['$scope', 'BlogService',
        function  ($scope, BlogService) {
            //I wonder how this works...Query is async after all :?
            $scope.posts = BlogService.query({ fields : "url_id date title"});
        }
    ]);
    
function setActivePost($scope, $sce, post) {
    $scope.post = post;
    $scope.trustedContent = $sce.trustAsHtml(post.content);
}
angular.module('projectX')
    .controller('LastestPostCtrl', ['$scope', '$state', '$sce', 'BlogService',
        function($scope, $state, $sce, BlogService) {
            BlogService.getLatest(function(post) {
                setActivePost($scope, $sce, post);
                
                $state.go('.post', 
                    { postUrlId : post.url_id ,}, 
                    { notify : false   }
                );
            });
        }
    ]);
    
angular.module('projectX')
    .controller('PostDisplayCtrl', ['$scope', '$stateParams', 'BlogService', '$sce',
        function($scope, $stateParams, BlogService, $sce) {
            BlogService.get({ postUrlId : $stateParams.postUrlId }, function ( post ) {
                setActivePost($scope, $sce, post);    
            });
        }   
    ]);


angular.module('projectX')
    .factory('BlogService', ['$resource', 
        function ($resource) {
            var blog_RES = $resource('/server/API/REST/post/:postUrlId', {}, {
                    getLatest : {
                        url : '/server/API/REST/post/latest',
                        isArray : false
                    }
                });
            
            return blog_RES; 
        }
    ]);
angular.module('projectX')
    .controller('ContactsCtrl', ['$scope', '$state', '$timeout', 'MessageService',
        function($scope, $state, $timeout, MessageService) {
            $scope.saving  = false;
            $scope.message = {};
    
            $scope.send = function () {
                $scope.saving = true; 
                MessageService.save($scope.message, function(response) {
                    if (response.success) {
                        $scope.message = {};
                        $scope.contactForm.$setPristine();
                        $timeout(function () {
                            $scope.saving = false;
                        }, 1000);
                    }
                });
            }
        }
    ]);
angular.module('projectX')
     .factory('MessageService', ['$resource', 
          function ($resource) {
              var contact_RES = $resource('/server/API/REST/message/', {});
             
             return contact_RES; 
          }
     ]);
angular.module('projectX')
    .controller('NewsCtrl', ['$scope', 'NewsService', '$stateParams',
        function($scope, NewsService, $stateParams) {
            $scope.news = NewsService.query();
        }
    ]);

angular.module('projectX')
    .factory('NewsService', ['$resource', 
        function ($resource) {
            var news_RES = $resource('/server/API/REST/news/:newsId', {});
            
            return news_RES; 
        }
    ]);
angular.module('projectX')
    .controller('NavigatorController', ['$scope', 'NavigationService', '$location', 
        function ($scope, NavigationService, $location) {
            var cats       = NavigationService.getMainNavItems();
            $scope.categories = cats;
        }
    ]);

angular.module('projectX')
    .factory('NavigationService', function () {
       var navService = {};
    
       navService.getMainNavItems = function () {
          return [
            {
                 name : 'HOME',
                 sref : 'home',
                 text : ' ',
                 css  : 'home icon-home'
    	    },
            {
                 name : 'Blog'
    	    },
    	    {
                 name : 'Projects'
    	    },
            {
                 name : "How To's",
                 sref : 'tutor'
    	    },
    	    {
                 name : 'Contact'
    	    },
            {
                 name : 'About'
    	    }
          ];
       }
       return navService;
    });
angular.module('projectX')
    .controller('ProjectsExtendedListController',['$scope', 'ProjectsService', 
        function($scope, ProjectsService) {
            $scope.projects = ProjectsService.query();
        }
    ]);

angular.module('projectX')
    .controller('ProjectDisplayController', ['$scope', 'ProjectsService', '$stateParams',
        function($scope, ProjectsService, $stateParams) {
            $scope.project = ProjectsService.get({ projectId : $stateParams.projectId });
        }
    ]);
angular.module('projectX')
    .factory('ProjectsService', ['$resource', 
        function ($resource) {
            var project_RES = $resource('/server/API/REST/project/:projectId', {});
            
            return project_RES; 
        }
    ]);
angular.module('projectX')
    .directive('sitesForSharing', ['$location', 
        function($location) {
            function link(scope, element, attrs) {
                var refresh = addthis.layers.refresh;
                //see http://support.addthis.com/customer/portal/articles/1692927-using-dashboard-configuration-tools-dynamically
                if (refresh) {
                    refresh();
                }
            }
            return {
                restrict: 'E',
                // addthis:url="http://example.com"
                template: function(elem, attr){
                    var tpl = '<div class="addthis_sharing_toolbox sharing" ';
                    
                    if (attr.url === 'base') {
                        tpl += 'data-url="' + $location.host()+'"';
                    }
                    tpl += '></div>';
                    console.log(tpl)
    
                    return tpl;
                },
                link: link
            };
        }
    ]);

angular.module('projectX')
    .controller('TutorCtrl', ['$scope', 'TutorService', '$stateParams',
        function($scope, TutorService, $stateParams) {
            $scope.tutorial = TutorService.get({ urlId : $stateParams.urlId });
        }
    ])
    .controller('TutorsController', ['$scope', 'TutorService',
        function($scope, TutorService) {
            $scope.order = 'date';
            $scope.reverse = false;
            $scope.search = {};
            $scope.categories = []; 
            
            $scope.tutorials = TutorService.query(function (tutorials) {
                var len  = tutorials.length,
                    cats = [],
                    cats_map = {},
                    cur_cat;
                
                while (len--) {
                    cur_cat = tutorials[len].category;
    
                    if(!cats_map[cur_cat]) {
                        cats_map[cur_cat] = true;
                        cats.push({name : tutorials[len].category});
                    }
                }
                $scope.categories = cats;
            });
        }
    ]);
angular.module('projectX')
     .factory('TutorService', ['$resource', 
          function ($resource) {
              var tutor_RES = $resource('/server/API/REST/tutorial/:urlId', {});
             
             return tutor_RES; 
          }
     ]);
angular.module('projectX')
    .directive('backButton',[
        '$window', 
        function($window){
            return {
              restrict: 'A',
         
              link: function(scope, element, attrs) {
                element.bind('click', goBack);
                element.addClass('back-btn');

                function goBack() {
                  $window.history.back();
                }
              }
            }
        }
    ]);