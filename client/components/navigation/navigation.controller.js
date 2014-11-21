angular.module('projectX')
    .controller('NavigatorController', ['$scope', 'NavigationService', '$location', 
        function ($scope, NavigationService, $location) {
            var cats       = NavigationService.getMainNavItems();
            $scope.categories = cats;
        }
    ]);
