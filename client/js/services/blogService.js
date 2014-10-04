angular.module('projectX')
    .factory('BlogService', ['$resource', function ($resource) {
        var service = {},
            blog_RES = $resource('/server/API/REST/post/:postId');
        
        return blog_RES; 
    }]);