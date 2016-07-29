angular.module('movServices', [])
	
	.factory('dataFactory', ['$http', 'API', function( $http, API) {

	    var moviedataFactory = {};
	    function getMovies( filterCollection ){
	    	var urlpeti = API.URL + '/' + filterCollection + '?api_key=' + API.KEY;
	    	// console.log("la  url es " + urlpeti);
	        return $http.get( urlpeti ); //promise
	    }        
	return {
		getMovies: getMovies
	}
}])



