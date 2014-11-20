angular.module('projectX')
    .factory('BlogService', ['$resource', 
        function ($resource) {
            var blog_RES = $resource('/server/api/post/:postUrlId', {}, {
                    getLatest : {
                        url : '/server/api/post/latest',
                        isArray : false
                    }
                });
            
            return blog_RES; 
        }
    ]);