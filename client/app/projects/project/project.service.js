angular.module('projectX')
    .factory('ProjectsService', ['$resource', 
        function ($resource) {
            var project_RES = $resource('/server/api/project/:projectId', {});
            
            return project_RES; 
        }
    ]);