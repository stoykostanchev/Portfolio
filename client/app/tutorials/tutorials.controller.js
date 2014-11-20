angular.module('projectX')
    .controller('TutorsController', ['$scope', 'TutorService',
        function($scope, TutorService) {
            $scope.order = 'date';
            $scope.reverse = false;
            $scope.search = {};
            $scope.categories = []; 
            
            $scope.tutorials = TutorService.query(function (tutorials) {
                var len  = tutorials.length,
                    cats = [],
                    cats_map = {},
                    cur_cat;
                
                while (len--) {
                    cur_cat = tutorials[len].category;
    
                    if(!cats_map[cur_cat]) {
                        cats_map[cur_cat] = true;
                        cats.push({name : tutorials[len].category});
                    }
                }
                $scope.categories = cats;
            });
        }
    ]);