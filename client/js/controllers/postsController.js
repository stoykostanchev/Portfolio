function PostsController ($scope, BlogService) {
    //I wonder how this works...Query is async after all :?
    $scope.posts = BlogService.query({ fields : "id date title"});
}

