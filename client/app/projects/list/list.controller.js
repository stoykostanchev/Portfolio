angular.module('projectX')
    .controller('ProjectsListCtrl',['$scope', 'ProjectsService', 
        function($scope, ProjectsService) {
            $scope.projects = ProjectsService.query();
        }
    ]);

