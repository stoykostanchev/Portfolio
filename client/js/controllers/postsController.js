function PostsController ($scope, BlogService) {
    $scope.posts = BlogService.query();
}

