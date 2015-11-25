'use strict';

angular.module('tarziprojektApp')
    .directive('hideLoaderOnFinish', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        if($().hasClass('loader')) {
                            $('#imageLoader').removeClass('loader');
                        }
                    });
                }
            }
        }
    })
    .controller('GalleryCtrl', function ($scope, $http, $routeParams) {
        $scope.galleries = {};
        $scope.items = [];

        switch ($routeParams.galleryId) {
            case "editorial" :
                getJson("https://dl.dropboxusercontent.com/s/v6edx80fioewc9z/emberek.json");
                break;
            case "eskuvo" :
                getJson("https://dl.dropboxusercontent.com/s/pngq6v1bjduoh29/eskuvo.json");
                break;
            case "termeszet" :
                getJson("https://dl.dropboxusercontent.com/s/0or076wfr45jgjj/termeszet.json");
                break;
            case "utazas" :
                getJson("https://dl.dropboxusercontent.com/s/v9xo2iptb8hkswb/utazas.json");
                break;
            default:
                window.location.replace('/');
                break;
        }

            function getJson(json) {
                $http.get(json)
                    .success(function (response) {
                        $scope.items = response;
                    }).catch(function (data, status) {
                        console.error('error while get images', status, data);
                        window.location.replace('/');
                    });
            }

        $scope.isLandscape = function (landscape) {
            return landscape == true;
        };

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }

        function initImageViewer() {
            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: true,
                closeMarkup: '<button title="Bezár (Esc)" type="button" class="mfp-close">&#215;</button>',
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                tLoading: ' ',
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true,
                    tPrev: 'Előző (balra nyíl gomb)',
                    tNext: 'Következő (jobbra nyíl gomb)',
                    tCounter: '<span class="mfp-counter">%curr% / %total% képből</span>',
                },
                zoom: {
                    enabled: true,
                    easing: 'ease-in-out',
                    duration: 300,
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }

            });
        }

        $(document).ready(function () {
            showRealContent();
            initImageViewer();
        });

    });
