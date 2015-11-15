'use strict';

angular.module('tarziprojektApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/references', {
        templateUrl: 'app/references/references.html',
        controller: 'ReferencesCtrl'
      });
  });
