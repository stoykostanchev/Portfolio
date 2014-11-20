angular.module('projectX')
    .controller('PostsController', ['$scope', 'BlogService',
        function  ($scope, BlogService) {
            //I wonder how this works...Query is async after all :?
            $scope.posts = BlogService.query({ fields : "url_id date title"});
        }
    ]);