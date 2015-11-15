'use strict';

angular.module('tarziprojektApp')
    .controller('AboutCtrl', function () {

        $(document).ready(function () {
            showRealContent();
            new WOW().init();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }
    });
