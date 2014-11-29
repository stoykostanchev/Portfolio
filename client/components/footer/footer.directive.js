'use strict';

angular.module('projectX')
  .directive('mainFooter', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'EA',
      replace : true
    };
  });