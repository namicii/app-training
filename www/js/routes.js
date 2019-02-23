angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('bIMBETA', {
    url: '/page1',
    templateUrl: 'templates/bIMBETA.html',
    controller: 'bIMBETACtrl'
  })

  .state('androidOS', {
    url: '/page2',
    templateUrl: 'templates/androidOS.html',
    controller: 'androidOSCtrl'
  })

  .state('iOS', {
    url: '/page3',
    templateUrl: 'templates/iOS.html',
    controller: 'iOSCtrl'
  })

  .state('firdApp', {
    url: '/page6',
    templateUrl: 'templates/firdApp.html',
    controller: 'firdAppCtrl'
  })

  .state('aboutUs', {
    url: '/page4',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('sliderPage', {
    url: '/page5',
    templateUrl: 'templates/sliderPage.html',
    controller: 'sliderPageCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});