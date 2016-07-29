angular.module("movControllers", ['ngRoute', 'movServices'])
		
	.controller("PopularTmplCtrl", ['$scope', '$http', 'dataFactory', function( $scope, $http, dataFactory ) {
			
   			dataFactory.getMovies( 'popular' )
				.then( function ( dataMoviesReceived ) {
					$scope.amovies =  dataMoviesReceived.data.results;		
				})
 	}])

 	.controller("UpcomingTmplCtrl", ['$scope', '$http', 'dataFactory', function( $scope, $http, dataFactory ) {
			
   			dataFactory.getMovies( 'upcoming' )
				.then( function ( dataMoviesReceived ) {
					$scope.amovies =  dataMoviesReceived.data.results;		
				})
 	}])

	.controller("NowPlayingTmplCtrl", ['$scope', '$http', 'dataFactory', function( $scope, $http, dataFactory ) {
			
   			dataFactory.getMovies( 'now_playing' )
				.then( function ( dataMoviesReceived ) {
					$scope.amovies =  dataMoviesReceived.data.results;		
				})
 	}])

 	.controller("TopRatedTmplCtrl", ['$scope', '$http', 'dataFactory', function( $scope, $http, dataFactory ) {
			
   			dataFactory.getMovies( 'top_rated' )
				.then( function ( dataMoviesReceived ) {
					$scope.amovies =  dataMoviesReceived.data.results;		
				})
 	}])


