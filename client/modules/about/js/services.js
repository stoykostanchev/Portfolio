angular.module('projectX')
    .factory('NewsService', ['$resource', function ($resource) {
        var news_RES = $resource('/server/API/REST/news/:newsId', {});
        
        return news_RES; 
    }]);