function PostsController ($scope, BlogService) {
    //I wonder how this works...Query is async after all :?
    $scope.posts = BlogService.query({ fields : "id date title"});
}
angular.module('projectX')
    .controller('LastestPostCtrl', function($scope, $state, BlogService) {
        BlogService.get({ latest : true }, function(post) {
            $scope.post = post;
            $state.go('.post', 
                { postId : post.id }, 
                { notify : false   }
            );
        });
    });
    
angular.module('projectX')
    .controller('PostDisplayCtrl',
        function($scope, $stateParams, BlogService) {
            BlogService.get({ id : $stateParams.postId }, function ( post ) {
                $scope.post = post;
            });
        }   
    );

