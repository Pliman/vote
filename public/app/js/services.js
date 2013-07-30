'use strict';

/* Services */
define(['angular', 'angularResource'], function (angular) {
	angular.module('attendee.services', ['ngResource'])
		.factory('users', ['$resource', function ($resource) {
			return $resource('/users', {}, {
				get: {method: 'GET', isArray: true},
				save: {method: 'GET', isArray: false}
			});
		}])
		.factory('teams', ['$resource', function ($resource) {
			return $resource('/team', {}, {
				get: {method: 'GET', isArray: true},
				save: {method: 'POST', isArray: false}
			});
		}])
		.factory('session', ['$resource', function ($resource) {
			return $resource('/session', {}, {
				get: {method: 'GET', isArray: false},
				save: {method: 'POST', isArray: false}
			});
		}]);
});
