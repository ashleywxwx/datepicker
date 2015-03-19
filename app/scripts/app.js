'use strict';

/**
 * @ngdoc overview
 * @name datepickerApp
 * @description
 * # datepickerApp
 *
 * Main module of the application.
 */
angular
  .module('datepickerApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CalendarCtrl as calendarCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
