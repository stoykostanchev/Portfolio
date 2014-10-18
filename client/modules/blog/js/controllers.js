function PostsController ($scope, BlogService) {
    //I wonder how this works...Query is async after all :?
    $scope.posts = BlogService.query({ fields : "url_id date title"});
}
angular.module('projectX')
    .controller('LastestPostCtrl', function($scope, $state, BlogService) {
        BlogService.getLatest(function(post) {
            $scope.post = post;
            $state.go('.post', 
                { postUrlId : post.url_id ,}, 
                { notify : false   }
            );
        });
    });
    
angular.module('projectX')
    .controller('PostDisplayCtrl',
        function($scope, $stateParams, BlogService) {
            BlogService.get({ postUrlId : $stateParams.postUrlId }, function ( post ) {
                $scope.post = post;
            });
        }   
    );

