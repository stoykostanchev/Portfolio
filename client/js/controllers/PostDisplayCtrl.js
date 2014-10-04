angular.module('projectX')
    .controller('PostDisplayCtrl',
        function($scope, $stateParams, BlogService) {
            BlogService.get({ id : $stateParams.postId }, function ( post ) {
                $scope.post = post;
            });
        }   
    );