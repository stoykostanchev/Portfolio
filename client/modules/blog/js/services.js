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