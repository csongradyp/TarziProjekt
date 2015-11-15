'use strict';

angular.module('tarziprojektApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/publications', {
        templateUrl: 'app/publications/publications.html',
        controller: 'PublicationsCtrl'
      });
  });
