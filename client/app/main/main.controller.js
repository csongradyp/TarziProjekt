'use strict';

angular.module('tarziprojektApp')
    .controller('MainCtrl', function ($scope, $http) {

        $(document).ready(function () {
            showRealContent();
        });

        function showRealContent() {
            $('.loader').fadeOut("slow");
            $('body').fadeIn();
        }

        $scope.images = [];

        $http.get("https://dl.dropboxusercontent.com/u/6057082/tarzi/images.json")
            .success(function (response) {
                $scope.images = response.images;
            });

        var owl = $('.owl-carousel').owlCarousel({
            items: 1,
            center: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            slideSpeed: 300,
            paginationSpeed: 400,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            lazyLoad: false
            //afterMove: previousslide,
            //beforeMove: nextslide
            //itemsDesktop : [1199,3],
            //itemsDesktopSmall : [979,3]
        });

        function previousslide() {
            jQuery(".owl-item.active h2").addClass('animated bounce');
        }
        function nextslide() {
            jQuery(".owl-item h2").removeClass('animated bounce');
        }

        //Function to animate slider captions
        //function doAnimations(elems) {
        //    //Cache the animationend event in a variable
        //    var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        //
        //    elems.each(function () {
        //        var $this = $(this);
        //        //var $animationType = $this.data('class');
        //        $this.addClass('wow').one(animEndEv, function () {
        //            $this.removeClass('wow');
        //        });
        //    });
        //}


        //// reset the transition by...
        //element.addEventListener("click", function(e) {
        //    e.preventDefault;
        //
        //    // -> removing the class
        //    element.classList.remove("run-animation");
        //
        //    // -> triggering reflow /* The actual magic */
        //    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        //    element.offsetWidth = element.offsetWidth;
        //
        //    // -> and re-adding the class
        //    element.classList.add("run-animation");
        //}, false);

        ////Variables on page load
        //var $myCarousel = $('owl-carousel'), $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //
        ////Animate captions in first slide on page load
        //doAnimations($firstAnimatingElems);
        //

        //Other slides to be animated on carousel slide event
        //owl.on('changed.owl.carousel', function (event) {
        //    var $animatingElems = $(event.relatedTarget).find('wow');
        //    doAnimations($animatingElems);
        //});

    });
