angular.module('projectX')
     .factory('TutorService', ['$resource', 
          function ($resource) {
              var tutor_RES = $resource('/server/API/REST/tutorial/:urlId', {});
             
             return tutor_RES; 
          }
     ]);