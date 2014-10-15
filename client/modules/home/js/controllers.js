angular.module('projectX')
    .controller('NewsCtrl', function($scope, NewsService, $stateParams) {
        $scope.news = NewsService.query();
    });
