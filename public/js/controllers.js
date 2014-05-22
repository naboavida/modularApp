'use strict';

// angular.module('myApp.controllers', []).
// 	controller('ProjectsCtrl', function($scope, $http) {
// 		$scope.projects = [{title:'California', area:'123'},{title:'Texas', area:'321'}];

// 		$scope.submitNewProject = function($scope, $location){
// 			console.log('submitNewProject');
// 			console.log($scope);
// 			$scope.projects.push({title:'New York', area:'231'});
// 		};
// 	});

var myApp = angular.module('myApp',[]);

myApp.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
    // $scope.projects = [{title:'California', area:'123'},{title:'Texas', area:'321'}];
    // $scope.projects = ["California", "Texas"];
    // console.log('ProjectsCtrl');

    $http.get('/api/projects').
	    success(function(data, status) {
	      // console.log("yeah read!");
	      // console.log(data);
	      $scope.projects = data;
	    }).
	    error(function (data, status) {
	      $scope.data = data || "Request failed";
	    });


	$scope.form = {};
 
    $scope.submitNewProject = function() {
    	console.log('submitNewProject')
    	console.log($scope.form);
    	$http.post('/api/projects', $scope.form).
		    success(function(data, status) {
		      console.log("yeah write!" + status);
		      console.log(data);
		      $scope.projects = data;
		    }).
		    error(function (data, status) {
		      $scope.data = data || "Request failed";
		    });

        // $scope.projects.push($scope.form);
        $scope.title = "";
        $scope.area = "";
    }
}]);