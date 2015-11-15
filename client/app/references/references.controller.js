'use strict';

angular.module('tarziprojektApp')
    .controller('ReferencesCtrl', function ($scope, $http) {

        function getReferenceJson(json, onSuccess) {
            $http.get(json)
                .success(function (response) {
                    onSuccess(response);
                }).catch(function (data, status) {
                console.error('error while get reference information', status, data);
                window.location.replace('/');
            });
        }

        getReferenceJson("https://dl.dropboxusercontent.com/s/emq4tiifpkvtv5q/references.json", function (response) {
            $scope.myReferences = response;
        });

        $(document).ready(function () {
            showRealContent();
            new WOW().init();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }
    });
