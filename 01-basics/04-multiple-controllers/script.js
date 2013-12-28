// script.js

var firstController = function($scope) {
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

}; // end firstController()

var secondController = function($scope) {
    // initialize model variables
    $scope.firstName = "Arbie";
    $scope.middleName = "Junior";
    $scope.lastName = "CuteCute";

    // define utility funcitons
    $scope.getFullName = function() {
	return [
	    $scope.firstName,
	    $scope.middleName,
	    $scope.lastName
	].join(' ');
    }; // end getFullName()

}; // end secondController()
