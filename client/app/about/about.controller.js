'use strict';

angular.module('tarziprojektApp')
    .controller('AboutCtrl', function () {

        $(document).ready(function () {
            showRealContent();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }
    });
