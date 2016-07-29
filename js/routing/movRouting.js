angular.module("movConfig", [])

	.config(function( $routeProvider ){

			$routeProvider
				.when('/',{
					templateUrl: '/templates/popular.html',
					controller: 'PopularTmplCtrl'
				})
				.when('/popular',{
					templateUrl: '/templates/popular.html',
					controller: 'PopularTmplCtrl'
				})
				.when('/upcoming',{
					templateUrl: '/templates/upcoming.html',
					controller: 'UpcomingTmplCtrl'
				})
				.when('/nowPlaying',{
					templateUrl: '/templates/nowPlaying.html',
					controller: 'NowPlayingTmplCtrl'
				})
				.when('/topRated',{
					templateUrl: '/templates/topRated.html',
					controller: 'TopRatedTmplCtrl'
				})
				.otherwise({ redirectTo: '/' }); ;

	})
