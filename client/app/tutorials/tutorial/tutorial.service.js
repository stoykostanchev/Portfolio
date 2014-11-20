angular.module('projectX')
     .factory('TutorService', ['$resource', 
          function ($resource) {
              var tutor_RES = $resource('/server/api/tutorial/:urlId', {});
             
             return tutor_RES; 
          }
     ]);