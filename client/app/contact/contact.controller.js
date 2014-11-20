angular.module('projectX')
    .controller('ContactsCtrl', ['$scope', '$state', '$timeout', 'MessageService',
        function($scope, $state, $timeout, MessageService) {
            $scope.saving  = false;
            $scope.message = {};
    
            $scope.send = function () {
                $scope.saving = true; 
                MessageService.save($scope.message, function(response) {
                    if (response.success) {
                        $scope.message = {};
                        $scope.contactForm.$setPristine();
                        $timeout(function () {
                            $scope.saving = false;
                        }, 1000);
                    }
                });
            }
        }
    ]);