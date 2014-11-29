'use strict';

angular.module('projectX')
  .directive('mainNavigation', function () {
    return {
      templateUrl: 'components/navigation/navigation.html',
      restrict: 'EA',
      replace : true
    }
  });