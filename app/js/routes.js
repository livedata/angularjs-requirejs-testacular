define(['app'], function (app) {
	'use strict';

	return app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {		
		$routeProvider.
		otherwise({redirectTo:'/'});
		//$locationProvider.html5Mode(true);        	
	}]);
});
