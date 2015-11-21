'use strict';

angular.module('tarziprojektApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        new WOW().init();

        WebFont.load({
            google: {
                families: ['Oxygen:300', 'Open+Sans+Condensed:300', 'Josefin+Sans:100', 'Great+Vibes', 'Shadows+Into+Light+Two', 'Architects+Daughter']
            }
        });
    });