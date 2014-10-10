angular.module('projectX')
     .factory('MessageService', ['$resource', function ($resource) {
         var contact_RES = $resource('/server/API/REST/message/', {});
        
        return contact_RES; 
     }]);