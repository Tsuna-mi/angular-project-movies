angular.module("movControllers", ['ngRoute', 'movServices'])
		
	.controller("PopularTmplCtrl", ['$scope', '$http', 'dataFactory', function( $scope, $http, dataFactory ) {
			
   			dataFactory.getMovies( 'popular' )
				.then( function ( dataMoviesReceived ) {
					$scope.amovies =  dataMoviesReceived.data.results;
				})
 	}])

	// .controller("UpcomingTmplCtrl", function( $scope, $http ) {
	// 		$scope.contenthome = "";

	// }])

	// .controller("NowPlayingTmplCtrl", function( $scope, $http ) {
	// 		$scope.contentcontact = "";
	// }])

	// .controller("TopRatedTmplCtrl", function( $scope, $http ) {
	// 		$scope.contentclient = "";
	// }])   

