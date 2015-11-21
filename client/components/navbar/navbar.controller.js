'use strict';

angular.module('tarziprojektApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Rólam',
                'link': '/about'
            }, {
                'title': 'Esk\u00FCv\u0151',
                'link': '/gallery/eskuvo'
            }, {
                'title': 'Utaz\u00E1s',
                'link': '/gallery/utazas'
            }, {
                'title': 'Term\u00E9szet',
                'link': '/gallery/termeszet'
            }, {
                'title': 'Emberek',
                'link': '/gallery/emberek'
            }, {
                'title': 'Referenci\u00E1k',
                'link': '/references'
            },{
                'title': 'Publik\u00E1ciók',
                'link': '/publications'
            }, {
                'title': 'Kapcsolat',
                'link': '/contact'
            }
        ];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };

    });