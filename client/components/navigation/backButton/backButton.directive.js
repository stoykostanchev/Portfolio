angular.module('projectX')
    .directive('backButton',[
        '$window', 
        function($window){
            return {
              restrict: 'A',
         
              link: function(scope, element, attrs) {
                element.bind('click', goBack);
                element.addClass('back-btn');

                function goBack() {
                  $window.history.back();
                }
              }
            }
        }
    ]);