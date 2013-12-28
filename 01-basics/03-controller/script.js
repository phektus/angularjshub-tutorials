// script.js
var simpleController = function($scope) {
    // initialize model variables
    $scope.firstName = "Junjun";
    $scope.lastName = "Arbie";

    // define util functions
    $scope.getFullName = function() {
	return [
	    $scope.firstName,
	    $scope.lastName
	].join(' ');
    }; // end getFullName()
}; // end simpleController()
