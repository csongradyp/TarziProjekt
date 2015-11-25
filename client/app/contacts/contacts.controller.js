'use strict';

angular.module('tarziprojektApp')
    .controller('ContactsCtrl', function ($scope, Modal) {
        $(document).ready(function () {
            showRealContent();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }

        $scope.submitted = false;

        $scope.reset = function () {
            $scope.user = {};
        };


        $scope.validateAndSend = function () {
            var form = document.getElementById('contact-form')[0];
            if(form.checkValidity()) {
                $scope.submitModal();
            }
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
