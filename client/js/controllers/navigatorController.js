function NavigatorController($scope, PostsService) {
    $scope.categories =  PostsService.query();
}
