'use strict';

angular.module('tarziprojektApp')
    .controller('ContactsCtrl', function ($scope, Modal) {
        $(document).ready(function () {
            showRealContent();
            new WOW().init();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }

        $scope.submitted = false;

        $scope.reset = function () {
            $scope.user = {};
        };

        $scope.submitModal = Modal.confirm.notify(function () {
            $scope.reset();
        });

        var modalSubscription = $scope.$on('modal.hide', function () {
            $scope.reset();
        });

        $scope.$on("$destroy", function () {
            modalSubscription();
        });

        $scope.reset();

    });
