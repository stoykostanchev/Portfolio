function setActivePost($scope, $sce, post) {
    $scope.post = post;
    $scope.trustedContent = $sce.trustAsHtml(post.content);
}
angular.module('projectX')
    .controller('PostCtrl', ['$scope', '$stateParams', 'BlogService', '$sce',
        function($scope, $stateParams, BlogService, $sce) {
            BlogService.get({ postUrlId : $stateParams.postUrlId }, function ( post ) {
                setActivePost($scope, $sce, post);    
            });
        }   
    ]);
angular.module('projectX')
    .controller('LatestPostCtrl', ['$scope', '$state', '$sce', 'BlogService',
        function($scope, $state, $sce, BlogService) {
            BlogService.getLatest(function(post) {
                setActivePost($scope, $sce, post);
                
                $state.go('.post', 
                    { postUrlId : post.url_id ,}, 
                    { notify : false   }
                );
            });
        }
    ]);