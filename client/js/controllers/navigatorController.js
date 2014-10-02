function NavigatorController($scope, NavigationService, $location) {
    var cats       = NavigationService.getMainNavItems();
    $scope.categories = cats;
    
    $scope.isActive = function(route) {
        return route === $location.path().split('/')[1];
    }
}
