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