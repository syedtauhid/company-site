
var app = angular.module('ngApp', ['angular-parallax','ngDialog', 'duScroll', 'angular-scroll-animate', 
                                    'ngMdIcons', 'ngAnimate', 'angular-carousel', 'matchMedia', 'CustomSelect']);

//Page scroll
    app.value('duScrollDuration', 800)
    app.value('duScrollBottomSpy', true);
    app.value('duScrollOffset', 30);