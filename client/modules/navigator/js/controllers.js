function NavigatorController($scope, NavigationService, $location) {
    var cats       = NavigationService.getMainNavItems();
    $scope.categories = cats;
}
