angular.module('projectX')
    .factory('BlogService', ['$resource', function ($resource) {
        return $resource('/server/API/REST/post', {}, {
            query : {
                method      : 'GET',
                isArray     : true
            }
        });
    }]);