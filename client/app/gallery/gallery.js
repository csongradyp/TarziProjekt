'use strict';

angular.module('tarziprojektApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gallery/:galleryId', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      });
  });
