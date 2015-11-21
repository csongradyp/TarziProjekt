'use strict';

angular.module('tarziprojektApp')
    .controller('PublicationsCtrl', function ($scope, $http) {

        function getJson(json, onSuccess) {
            $http.get(json)
                .success(function (response) {
                    onSuccess(response);
                }).catch(function (data, status) {
                console.error('error while get reference information', status, data);
                window.location.replace('/');
            });
        }

        getJson("https://dl.dropboxusercontent.com/s/bvo2wlaxv08vb1k/publications.json", function (response) {
            $scope.myPublications = response;
        });

        $(document).ready(function () {
            showRealContent();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }

    });
