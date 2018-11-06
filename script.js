var szyfratorApp = angular.module("szyfratorApp", ["ngRoute"]);

const API_URL = "http://0.0.0.0:5000"

szyfratorApp.config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl : 'pages/Main.html',
            controller  : 'mainController'
        })

		.when('/ceasar', {
			templateUrl : 'pages/Ceasar.html',
			controller  : 'ceasarController'
		})

		.when('/vigenere', {
			templateUrl : 'pages/Vigenere.html',
			controller  : 'vigenereController'
		})

		.when('/transposition', {
			templateUrl : 'pages/Transposition.html',
			controller  : 'transpositionController'
        })
        
        .when('/originalVigenere', {
			templateUrl : 'pages/OriginalVigenere.html',
			controller  : 'originalVigenereController'
        })
        
		.when('/railFence', {
			templateUrl : 'pages/RailFence.html',
			controller  : 'railFenceController'
        })
        
		.when('/weirdAlphabet', {
			templateUrl : 'pages/WeirdAlphabet.html',
			controller  : 'weirdAlphabetController'
        })
        
		.when('/atbash', {
			templateUrl : 'pages/Atbash.html',
			controller  : 'atbashController'
        });
});

szyfratorApp.controller('mainController', function($scope,$http) {
    $scope.message = 'Aplikacja szyfrująca i deszyfrująca.';
});

szyfratorApp.controller('ceasarController', function($scope,$http) {
	$scope.code = function(){
		$http.post(API_URL+'/ceasarCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/ceasarDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('vigenereController', function($scope, $http) {
	$scope.code = function(){
		$http.post(API_URL+'/vigenereCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/vigenereDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('transpositionController', function($scope,$http) {
	$scope.code = function(){
		$http.post(API_URL+'/transpositionCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/transpositionDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('originalVigenereController', function($scope,$http) {
	$scope.code = function(){
		$http.post(API_URL+'/originalVigenereCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/originalVigenereDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('railFenceController', function($scope, $http) {
	$scope.code = function(){
		$http.post(API_URL+'/railFenceCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/railFenceDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('weirdAlphabetController', function($scope, $http) {
	$scope.code = function(){
		$http.post(API_URL+'/weirdAlphabetCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/weirdAlphabetDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('atbashController', function($scope, $http) {
	$scope.code = function(){
		$http.post(API_URL+'/atbashCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post(API_URL+'/atbashDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});
