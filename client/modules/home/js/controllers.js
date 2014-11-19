angular.module('projectX')
    .controller('NewsCtrl', ['$scope', 'NewsService', '$stateParams',
        function($scope, NewsService, $stateParams) {
            $scope.news = NewsService.query();
        }
    ]);
