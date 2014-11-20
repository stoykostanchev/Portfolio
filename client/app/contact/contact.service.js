angular.module('projectX')
     .factory('MessageService', ['$resource', 
          function ($resource) {
              var contact_RES = $resource('/server/api/message/', {});
             
             return contact_RES; 
          }
     ]);