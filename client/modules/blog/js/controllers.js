angular.module('projectX')
    .controller('PostsController', ['$scope', 'BlogService',
        function  ($scope, BlogService) {
            //I wonder how this works...Query is async after all :?
            $scope.posts = BlogService.query({ fields : "url_id date title"});
        }
    ]);
    
function setActivePost($scope, $sce, post) {
    $scope.post = post;
    $scope.trustedContent = $sce.trustAsHtml(post.content);
}
angular.module('projectX')
    .controller('LastestPostCtrl', ['$scope', '$state', '$sce', 'BlogService',
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
    
angular.module('projectX')
    .controller('PostDisplayCtrl', ['$scope', '$stateParams', 'BlogService', '$sce',
        function($scope, $stateParams, BlogService, $sce) {
            BlogService.get({ postUrlId : $stateParams.postUrlId }, function ( post ) {
                setActivePost($scope, $sce, post);    
            });
        }   
    ]);

