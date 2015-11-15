'use strict';

angular.module('tarziprojektApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl'
      });
  });
