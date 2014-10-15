angular.module('projectX')
    .controller('ContactsCtrl', function($scope, $state, MessageService) {
        $scope.message = {
            category : 'none'
        };

        $scope.send = function () {
           MessageService.save($scope.message, function() {
               $scope.message = {};
           });
        }
    });