'use strict';

/* Controllers */
define(['jQuery', 'underscore', 'angular', 'popMsger', 'angularUiRouter', './services'], function ($, _, angular, popMsger) {
	return angular.module('attendee.controllers', ['attendee.services'])
		.controller('users', ['$scope', '$state', 'users', '$rootScope', "session", function ($scope, $state, users, $rootScope, session) {
			users.get(function (users) {
				$scope.users = users;
			});

			$scope.submitUser = function () {
				var user = $('#userName').val();

				if (!user) {
					alert('别调皮了，快输入你的姓名吧');
					return false;
				}

				if (!_.indexOf(user)) {
					alert('别调皮了，快输入你的真名吧');
					return false;
				}

				session.save({"user": user}, function (rtn) {
					if (rtn.result === "SUCCESS") {
						$rootScope.currentUser = user;
						$state.transitionTo('vote');
					}
				});
			};
		}])
		.controller('vote', ['$rootScope', '$scope', '$state', '$stateParams', 'teams', 'session',
			function ($rootScope, $scope, $state, $stateParams, teams, session) {
				var loadVotes = function () {
					teams.get(function (teams) {
						$scope.teams = teams;
					});
				};

				$scope.submitTeam = function () {
					var team = {
						name: $('#name').val(),
						link: $('#link').val(),
						count: 0
					};

					teams.save({"team": team}, function (rtn) {
						if (rtn.result === 'SUCCESS') {
							popMsger.setupPopMsger(new popMsger(rtn.msg, "success", 5000), $('#msger'),
								"addTeamSucc");

							var location = window.location.href;
							window.location.href = location;
						} else {
							popMsger.setupPopMsger(new popMsger(rtn.msg, "error", 20000), $('#msger'),
								"addTeamFail");
						}
					});
				};

				var teamAdd = function (teamName) {

				};

				if (!$rootScope.currentUser) {
					session.get(function (rtn) {
						if (rtn.result === "SUCCESS") {
							$rootScope.currentUser = rtn.data;

							loadVotes();
						} else {
							window.location.href = "/";
						}
					});
				} else {
					loadVotes();
				}
			}])
});
