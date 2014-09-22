function NavigatorController($scope, PostsService, $location) {
    var cats       = PostsService.query();
    $scope.categories = cats;
    
    $scope.isActive = function(route) {
        return route === $location.path().split('/')[1];
    }
}
