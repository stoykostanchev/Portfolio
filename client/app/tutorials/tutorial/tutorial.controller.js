angular.module('projectX')
    .controller('TutorCtrl', ['$scope', 'TutorService', '$stateParams',
        function($scope, TutorService, $stateParams) {
            $scope.tutorial = TutorService.get({ urlId : $stateParams.urlId });
        }
    ])