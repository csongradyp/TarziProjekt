"use strict";angular.module("tarziprojektApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","wu.masonry"]).config(["$routeProvider","$locationProvider",function(a,b){a.otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("tarziprojektApp").controller("AboutCtrl",function(){function a(){$(".loader").fadeOut("slow"),$("body").fadeIn()}$(document).ready(function(){a()})}),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/about",{templateUrl:"app/about/about.html",controller:"AboutCtrl"})}]),angular.module("tarziprojektApp").controller("ContactsCtrl",["$scope","Modal",function(a,b){function c(){$(".loader").fadeOut("slow"),$("body").fadeIn()}$(document).ready(function(){c()}),a.submitted=!1,a.reset=function(){a.user={}},a.submitModal=b.confirm.notify(function(){a.reset()});var d=a.$on("modal.hide",function(){a.reset()});a.$on("$destroy",function(){d()}),a.reset()}]),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/contact",{templateUrl:"app/contacts/contacts.html",controller:"ContactsCtrl"})}]),angular.module("tarziprojektApp").directive("hideLoaderOnFinish",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){b.$last===!0&&a(function(){$().hasClass("loader")&&$("#imageLoader").removeClass("loader")})}}}]).controller("GalleryCtrl",["$scope","$http","$routeParams",function(a,b,c){function d(c){b.get(c).success(function(b){a.items=b})["catch"](function(a,b){console.error("error while get images",b,a),window.location.replace("/")})}function e(){$(".loader").fadeOut("slow"),$("body").fadeIn()}function f(){$(".zoom-gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!0,closeMarkup:'<button title="Bezár (Esc)" type="button" class="mfp-close">&#215;</button>',mainClass:"mfp-with-zoom mfp-img-mobile",tLoading:" ",image:{verticalFit:!0},gallery:{enabled:!0,tPrev:"Előző (balra nyíl gomb)",tNext:"Következő (jobbra nyíl gomb)",tCounter:'<span class="mfp-counter">%curr% / %total% képből</span>'},zoom:{enabled:!0,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}}})}switch(a.galleries={},a.items=[],c.galleryId){case"editorial":d("https://dl.dropboxusercontent.com/s/v6edx80fioewc9z/emberek.json");break;case"eskuvo":d("https://dl.dropboxusercontent.com/s/pngq6v1bjduoh29/eskuvo.json");break;case"termeszet":d("https://dl.dropboxusercontent.com/s/0or076wfr45jgjj/termeszet.json");break;case"utazas":d("https://dl.dropboxusercontent.com/s/v9xo2iptb8hkswb/utazas.json")}a.isLandscape=function(a){return 1==a},$(document).ready(function(){e(),f()})}]),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/gallery/:galleryId",{templateUrl:"app/gallery/gallery.html",controller:"GalleryCtrl"})}]),angular.module("tarziprojektApp").controller("MainCtrl",["$scope","$http",function(a,b){function c(){$(".loader").fadeOut("slow"),$("body").fadeIn()}$(document).ready(function(){c()}),a.images=[],b.get("https://dl.dropboxusercontent.com/u/6057082/tarzi/images.json").success(function(b){a.images=b.images});$(".owl-carousel").owlCarousel({items:1,center:!0,loop:!0,autoplay:!0,autoplayTimeout:7e3,slideSpeed:300,paginationSpeed:400,nav:!1,dots:!0,smartSpeed:1500,lazyLoad:!1})}]),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}),(new WOW).init(),WebFont.load({google:{families:["Oxygen:300","Open+Sans+Condensed:300:latin,latin-ext","Josefin+Sans:100","Great+Vibes","Shadows+Into+Light+Two","Federo"]}})}]),angular.module("tarziprojektApp").controller("PublicationsCtrl",["$scope","$http",function(a,b){function c(a,c){b.get(a).success(function(a){c(a)})["catch"](function(a,b){console.error("error while get reference information",b,a),window.location.replace("/")})}function d(){$(".loader").fadeOut("slow"),$("body").fadeIn()}c("https://dl.dropboxusercontent.com/s/bvo2wlaxv08vb1k/publications.json",function(b){a.myPublications=b}),$(document).ready(function(){d()})}]),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/publications",{templateUrl:"app/publications/publications.html",controller:"PublicationsCtrl"})}]),angular.module("tarziprojektApp").controller("ReferencesCtrl",["$scope","$http",function(a,b){function c(a,c){b.get(a).success(function(a){c(a)})["catch"](function(a,b){console.error("error while get reference information",b,a),window.location.replace("/")})}function d(){$(".loader").fadeOut("slow"),$("body").fadeIn()}c("https://dl.dropboxusercontent.com/s/emq4tiifpkvtv5q/references.json",function(b){a.myReferences=b}),$(document).ready(function(){d()})}]),angular.module("tarziprojektApp").config(["$routeProvider",function(a){a.when("/references",{templateUrl:"app/references/references.html",controller:"ReferencesCtrl"})}]),angular.module("tarziprojektApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}},notify:function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments);d.shift();b=c({modal:{dismissable:!1,title:"Levél elküldve",html:"<p><strong>Köszönöm leveledet! Hamarosan felveszem veled a kapcsolatot</strong></p>",buttons:[{classes:"btn-success",text:"Ok",click:function(a){b.close(a)}}]}},"modal-success"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("tarziprojektApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Rólam",link:"/about"},{title:"Esküvő",link:"/gallery/eskuvo"},{title:"Utazás",link:"/gallery/utazas"},{title:"Természet",link:"/gallery/termeszet"},{title:"Editorial",link:"/gallery/editorial"},{title:"Referenciák",link:"/references"},{title:"Publikációk",link:"/publications"},{title:"Kapcsolat",link:"/contact"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()},a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("tarziprojektApp").run(["$templateCache",function(a){a.put("app/about/about.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class="about col-md-12"><div class=row><div class="col-sm-6 col-md-6 col-lg-5"><span class=about-img></span></div><div class="col-lg-4 col-md-5 col-sm-6 col-xs-12"><h1 class="barka wow fadeInLeft">Barka B&aacute;lint <span class="wow fadeInDownBig" data-wow-delay=500ms>"Tarzi"</span></h1><p>Barka B&aacute;lint vagyok, bar&aacute;taimnak Tarzi, sokan &uacute;gy ismernek, mint a kis ember, nagy f&eacute;nyk&eacute;pez&#337;g&eacute;ppel, de ezt sosem b&aacute;ntam, b&aacute;nom.</p><p>Nem vagyok sem m&#369;v&eacute;sz, sem pedig professzion&aacute;lis f&eacute;nyk&eacute;p&eacute;sz...<br>Azt pr&oacute;b&aacute;lom k&ouml;zvet&iacute;teni, amilyen szemmel &eacute;n l&aacute;tom az objekt&iacute;ven &aacute;t a vil&aacute;got. Sosem munka, ink&aacute;bb szerelem. Kikapcsol - felp&ouml;rget - lek&ouml;t - szabadd&aacute; tesz - megtan&iacute;t tudatosan gondolkodni... ;)<br>Szeretem az eml&eacute;keket, szeretem meg&eacute;lni a pillanatokat, majd egy-egy f&eacute;nyk&eacute;ppel &uacute;jra&eacute;lni, felid&eacute;zni azokat. Valahogy &uacute;gy szoktam mondani, ha szavakkal tudn&eacute;k festeni, akkor bizony&aacute;ra k&ouml;lt&#337; lenn&eacute;k, de &eacute;n ink&aacute;bb a f&eacute;nnyel pr&oacute;b&aacute;lok, &uacute;gyhogy egy m&aacute;sik &ouml;sv&eacute;nyen haladok.</p><div class=quote><div class="fa fa-quote-left wow fadeInDown" data-wow-delay=1.5s></div>No art, no design, no photgraphy ... just luminance through the lense!<div class="fa fa-quote-right wow fadeInUp" data-wow-delay=1.5s></div><br><div class=text-right><p>– Tarzi Projekt -</p></div></div></div><div class="col-md-1 col-xs-0"></div></div></div><footer class=footer><div ng-include="\'components/social/social.html\'"></div></footer>'),a.put("app/contacts/contacts.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><section id=contact class=contact><div class=container><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class=entry-social><div class=row><div class="clearfix col-lg-1 col-md-1 col-sm-2"></div><div class="fb wow fadeIn col-lg-5 col-md-5 col-sm-4 col-xs-6" data-wow-delay=0.1s><a href=http://facebook.com/tarzi.projekt target=_blank><span class="fa fa-facebook-f"></span>Facebook</a></div><div class="instagram wow fadeIn col-lg-5 col-md-5 col-sm-4 col-xs-6" data-wow-delay=0.3s><a href=http://instagram.com/tarziprojekt target=_blank><span class="fa fa-pinterest-p"></span>Instagram</a></div></div><div class=row><div class="clearfix col-lg-1 col-md-1 col-sm-2"></div><div class="pinterest wow fadeIn col-lg-5 col-md-5 col-sm-4 col-xs-6" data-wow-delay=0.2s><a href=https://www.pinterest.com/blinttarzi target=_blank><span class="fa fa-pinterest-p"></span>Pinterest</a></div><div class="px500 wow fadeIn col-lg-5 col-md-5 col-sm-4 col-xs-6" data-wow-delay=0.4s><a href=https://500px.com/tarzi84 target=_blank><span class="fa fa-500px"></span>500px</a></div></div></div></div></div><div class=container><div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class=row><div class="col-lg-3 col-md-1 col-sm-2"></div><div class="wow fadeInLeft col-lg-2 col-md-3 col-sm-2 col-xs-3" data-wow-delay=0.5s><div class="fa fa-envelope fa-4x"></div></div><h3 class="mail-address wow fadeIn col-lg-6 col-md-4 col-sm-5 col-xs-9" data-wow-delay=1s><a href=mailto:info@tarziprojekt.hu target=_blank>info@tarziprojekt.hu</a></h3></div><div class="write-here wow fadeIn col-lg-12 col-md-12 col-sm-12 text-center" data-wow-delay=1.1s>vagy írj itt:</div></div></div><div class=container><div class="row wow fadeIn" data-wow-delay=1s ng-controller=ContactsCtrl><div class="col-lg-12 col-md-12"><div class=boxed-grey><iframe name=hidden_iframe id=hidden_iframe style=display:none onload="if(submitted) {}"></iframe></div><div class="col-md-6 contact-form"><form id=contact-form action="" method=post target=hidden_iframe onsubmit="submitted=true"><div class=form-group><label for=name>Név</label><div class=input-group><span class=input-group-addon><span class="glyphicon glyphicon-user"></span></span> <input name=entry.x ng-model=user.name class=form-control id=name placeholder=Neved required></div></div><div class=form-group><label for=email>E-mail</label><div class=input-group><span class=input-group-addon><span class="glyphicon glyphicon-envelope"></span></span> <input type=email name=entry.x ng-model=user.email class=form-control id=email placeholder="e-mail címed ahova válaszolhatok" required></div></div><div class=form-group><label for=name>Üzenet</label><textarea name=entry.x id=message ng-model=user.message class=form-control rows=9 cols=25 required placeholder="Írd meg kérdésed vagy kérésed"></textarea></div><button type=submit ng-click=submitModal() class="btn btn-lg btn-primary btn-block" id=sendMail><span class="glyphicon glyphicon-send"></span> Küldés</button></form></div><div class="col-md-3 col-sm-0"></div></div></div></div></section>'),a.put("app/gallery/gallery.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div id=imageLoader class=loader hide-loader-on-finish></div><div class=container style="padding-bottom: 70px"><div class=zoom-gallery masonry column-width=200 preserve-order masonry-options="{ columnWidth: 100, transitionDuration: \'0.4s\', resizable: true, layoutMode: \'fitRows\' }"><div class=masonry-brick ng-repeat="item in items track by $index"><a class="wow fadeInUp" data-lightbox=group href={{item.image}}><img class=hover-zoom ng-src={{item.thumb}}> <span class=text-content ng-class="{landscape : true=={{item.landscape}}}"><span>{{item.description}}</span></span></a></div></div></div><footer class=footer><div ng-include="\'components/social/social.html\'"></div></footer>'),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><section><div class=carousel><div class="owl-carousel owl-theme"><div class=owl-item><div class=item><div class=first></div></div><div class=carousel-caption><h2 data-wow-duration=0.7s data-wow-delay=500ms class="wow bounceInDown animated">Barka B&aacute;lint<span>"Tarzi"</span></h2><h3 data-wow-duration=1000ms class="wow slideInLeft animated"><span class=color>kreat&iacute;v</span> digitális fotózás</h3><p data-wow-duration=1000ms class="wow slideInRight animated"><span class="fa fa-map-marker"></span> Szeksz&aacute;rd</p></div></div><div class=owl-item><div class=item><div class=second></div></div><div class=container><div class=carousel-caption><h2 data-wow-duration=700ms data-wow-delay=500ms class="wow bounceInDown animated">Barka B&aacute;lint<span>"Tarzi"</span></h2><h3 data-wow-duration=1000ms class="wow slideInLeft animated"><span class=wedding>Nagy pillanatok</span></h3><p><a class="btn btn-lg btn-primary" href=/gallery/eskuvo>Megnézem</a></p></div></div></div><div class=owl-item><div class=item><div class=third></div></div><div class=container><div class=carousel-caption><h2 data-wow-duration=700ms data-wow-delay=500ms class="wow bounceInDown animated">Barka B&aacute;lint<span>"Tarzi"</span></h2><h3 data-wow-duration=1000ms class="wow slideInLeft animated"><span class=portre>Portr&eacute; fot&oacute;z&aacute;s</span></h3><p><a class="btn btn-lg btn-primary" href=/gallery/emberek>Megnézem</a></p></div></div></div></div></div></section><footer class=footer><div class=col-md-12><div class=row><div class="social col-lg-10 col-lg-offset-1"><ul><a href=http://facebook.com/tarzi.projekt target=_blank><li class=facebook></li></a> <a href=http://instagram.com/tarziprojekt target=_blank><li class=instagram></li></a> <a href=https://500px.com/tarzi84 target=_blank><li class=px500></li></a> <a href=https://www.pinterest.com/blinttarzi target=_blank><li class=printerest></li></a> <a href=mailto:tarzi.projekt@gmail.com target=_blank><li class=mail></li></a></ul></div><div class="mindo col-lg-1">Weboldal: <a href=http://mindodesign.hu target=_blank><img src=assets/images/mindo.png height=30></a></div></div></div></footer>'),a.put("app/publications/publications.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class="col-lg-12 text-center"><h1 class="section-title wow fadeInDown">Publikációk</h1><h3 class="section-heading text-muted wow fadeIn" data-wow-delay=0.5s>Publikációk és média megjelenések rólam és a munkáimról</h3></div></div><div class=container style="padding-bottom: 50px"><ul class=tmtimeline><li ng-repeat="publication in myPublications track by $index" class="wow fadeInUp" data-wow-delay="{{200 + $index*200}}ms"><time class=tmtime datetime={{publication.date}}><span>{{publication.date}}</span><span ng-if=publication.type>{{publication.type}}</span></time><div class="tmicon fa" ng-class=publication.icon></div><div class=tmlabel><h2>{{publication.title}}</h2><p ng-if=publication.text><span class="fa fa-quote-left wow fadeInDown" data-wow-delay=1s></span> {{publication.text}} <span class="wow zoomIn" data-wow-delay=0.3s>.</span> <span class="wow zoomIn" data-wow-delay=0.4s>.</span> <span class="wow zoomIn" data-wow-delay=0.5s>.</span> <span class="fa fa-quote-right wow fadeInUp" data-wow-delay=1s></span></p><a ng-if=publication.link class="btn btn-primary" target=_blank href={{publication.link}}>Részletek</a></div></li></ul></div><footer class=footer><div ng-include="\'components/social/social.html\'"></div></footer>'),a.put("app/references/references.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class="col-lg-12 text-center"><h1 class="section-title wow fadeInDown">Referenciák</h1><h3 class="section-heading text-muted wow fadeIn" data-wow-delay=0.5s>Eddigi munkáim és partnereim</h3></div></div><div ng-repeat="reference in myReferences track by $index" class="content-section wow fadeInUp" data-wow-delay={{$index*100}}ms><div class=container><div class=row><div class="col-lg-5 col-sm-6" ng-class-even="\'col-lg-offset-1 col-sm-push-6\'"><div class=clearfix></div><h2 class=section-heading>{{reference.header}}</h2><h4 class=reference-type>{{reference.type}}</h4><p class="text-muted reference-text">{{reference.text}}</p><h4 ng-if=reference.place class=subheading><span class="fa fa-map-marker"></span> {{reference.place}}</h4><a ng-if=reference.link href={{reference.link}} target=_blank>{{reference.link}}</a></div><div class="reference-image col-lg-5 col-sm-6" ng-class-even="\'col-sm-pull-6\'" ng-class-odd="\'col-lg-offset-2\'"><img class="img-circle img-responsive" src={{reference.image}} alt={{reference.header}}></div></div></div></div><footer class=footer style="position: relative"><div ng-include="\'components/social/social.html\'"></div></footer>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand><img src="/assets/images/brand.png"></a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" class=navbar-item ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>'),a.put("components/social/social.html",'<div class=col-md-12><div class=row><div class="social col-lg-10 col-lg-offset-1"><ul><a href=http://facebook.com/tarzi.projekt target=_blank><li class=facebook></li></a> <a href=http://instagram.com/tarziprojekt target=_blank><li class=instagram></li></a> <a href=https://500px.com/tarzi84 target=_blank><li class=px500></li></a> <a href=https://www.pinterest.com/blinttarzi target=_blank><li class=printerest></li></a> <a href=mailto:tarzi.projekt@gmail.com target=_blank><li class=mail></li></a></ul></div><div class="mindo col-lg-1">Weboldal: <a href=http://mindodesign.hu target=_blank><img src=assets/images/mindo.png height=30></a></div></div></div>')}]);