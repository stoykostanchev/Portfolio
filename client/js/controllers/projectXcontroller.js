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
        templateUrl : "templates/navigator.html", 
        controller  : "NavigatorController"
    })
    .when("/Posts", {
        templateUrl : "templates/posts.html",
        controller  : "PostsController"
    })
    .otherwise("/404", {
        templateUrl : "index.html"
    });
}]);