var app = angular.module('projectX', ['ngRoute']);
//var navigatorModule = angular.module('NavigatorModule', []);

app.factory('PostsService', function () {
   var postService = {};

   postService.query = function () {
      return [
        {
             name : 'Posts'
	    },
	    {
             name : 'Projects'
	    },
	    {
             name : 'Contact'
	    },
        {
             name : 'About'
	    }
      ];
   }
   return postService;
});
app.config(['$routeProvider', function ($routeProvider) { 
    $routeProvider
    .when("/", {
        templateUrl : "templates/posts.html", 
        controller  : "PostsController"
    })
    .when("/Posts", {
        templateUrl : "templates/posts.html", 
        controller  : "PostsController"
    })
    .when('/About', {
        templateUrl : 'templates/about.html'
    })
    .when('/Contact', {
        templateUrl : 'templates/contact.html',
        controller  : 'ContactsController'
    })
    .when('/Projects', {
        templateUrl : 'templates/projects.html',
        controller  : 'ProjectsController'
    })
    .otherwise("/404", {
        templateUrl : "index.html"
    });
}]);