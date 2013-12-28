// script.js

function concat(arr) {
    return arr.join(' ');
}

var firstControllerScope = function($scope) {
    $scope.firstName = 'Junjun';
}; // end firstControllerScope()

var secondControllerScope = function($scope) {
    $scope.lastName = 'Arbie';
    $scope.getFullName = function() {
	return concat([
	    $scope.firstName,
	    $scope.lastName
	]);
    }; // end getFullName() 
}; // end secondControllerScope()

var thirdControllerScope = function($scope) {
    $scope.middleName = "Cutecute";
    $scope.lastName = "Samong";
    $scope.getFullName = function() {
	return concat([
	    $scope.firstName,
	    $scope.middleName,
	    $scope.lastName
	]);
    }; // end getFullName() 
}; // end thirdControllerScope()

var firstControllerObj = function($scope) {
    $scope.firstModelObj = {
	firstName: 'Harvey'
    };
}; // end firstControllerObj()

var secondControllerObj = function($scope) {
    $scope.secondModelObj = {
	lastName: "Junior"
    };
    $scope.getFullName = function() {
	return concat([
	    $scope.firstModelObj.firstName,
	    $scope.secondModelObj.lastName
	]);
    }; // end getFullName() 
}; // end secondControllerObj()

var thirdControllerObj = function($scope) {
    $scope.thirdModelObj = {
	middleName: 'LabLab',
	lastName: 'Arbie'
    };
    $scope.getFullName = function() {
	return concat([
	    $scope.firstModelObj.firstName,
	    $scope.thirdModelObj.middleName,
	    $scope.thirdModelObj.lastName
	]);
    }; // end getFullName() 
}; // end thirdControllerObj()
