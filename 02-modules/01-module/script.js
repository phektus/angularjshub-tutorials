// A simple module with no dependencies
angular.module('mainModule', []).controller(
    'simpleController', 
    function($scope) {
	$scope.person = {
	    firstName: 'Junjun',
	    lastName: 'Arbie',
	    getFullName: function() {
		return [
		    this.firstName,
		    this.lastName
		].join(' ');
	    } // end getFullName()
	}; // end person def
    });

