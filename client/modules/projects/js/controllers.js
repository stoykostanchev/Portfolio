angular.module('projectX')
    .controller('ProjectsExtendedListController',['$scope', 'ProjectsService', 
        function($scope, ProjectsService) {
            $scope.projects = ProjectsService.query();
        }
    ]);

angular.module('projectX')
    .controller('ProjectDisplayController', ['$scope', 'ProjectsService', '$stateParams',
        function($scope, ProjectsService, $stateParams) {
            $scope.project = ProjectsService.get({ projectId : $stateParams.projectId });
        }
    ]);