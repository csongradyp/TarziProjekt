'use strict';

angular.module('tarziprojektApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'wu.masonry'
    //'PhotoSwipe',
    //'PhotoSwipeUI_Default'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
