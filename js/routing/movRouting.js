angular.module("movConfig", [])

	.config(function( $routeProvider ){

			$routeProvider
				.when('/',{
					templateUrl: '/templates/results.html',
					controller: 'PopularTmplCtrl'
				})
				.when('/popular',{
					templateUrl: '/templates/results.html',
					controller: 'PopularTmplCtrl'
				})
				.when('/upcoming',{
					templateUrl: '/templates/results.html',
					controller: 'UpcomingTmplCtrl'
				})
				.when('/nowPlaying',{
					templateUrl: '/templates/results.html',
					controller: 'NowPlayingTmplCtrl'
				})
				.when('/topRated',{
					templateUrl: '/templates/results.html',
					controller: 'TopRatedTmplCtrl'
				})
				.otherwise({ redirectTo: '/' }); ;

	})
