angular.module('projectX')
    .controller('ProjectsExtendedListController', function($scope, ProjectsService) {
        $scope.projects = ProjectsService.query();
    });

angular.module('projectX')
    .controller('ProjectDisplayController', function($scope, ProjectsService, $stateParams) {
        $scope.project = ProjectsService.get({ projectId : $stateParams.projectId });
    });