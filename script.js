var szyfratorApp = angular.module("szyfratorApp", ["ngRoute"]);

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

szyfratorApp.controller('mainController', function($scope) {
    $scope.message = 'Aplikacja szyfrująca i deszyfrująca.';
});

	// create the controller and inject Angular's $scope
szyfratorApp.controller('ceasarController', function($scope) {
	$scope.message = 'Szyfr Cezara.';
});

szyfratorApp.controller('vigenereController', function($scope) {
	$scope.code = function(){
		$http.post('http://0.0.0.0:5000/vigenereCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
		//$scope.result= "ZAKODOWANO"
	}
	$scope.decode = function(){
		/*$http.post('http://0.0.0.0:5000/vigenereDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});*/
		$scope.result = "ODKODOWANO"
	}
});

szyfratorApp.controller('transpositionController', function($scope) {
	$scope.message = 'Szyfr przestawny.';
});

szyfratorApp.controller('originalVigenereController', function($scope) {
	$scope.message = 'Oryginalny Szyfr Vigenera.';
});

szyfratorApp.controller('railFenceController', function($scope) {
	$scope.message = 'Szyfr Płotkowy.';
});

szyfratorApp.controller('weirdAlphabetController', function($scope, $http) {
	$scope.code = function(){
		$http.post('http://0.0.0.0:5000/weirdAlphabetCode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Zakodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
	$scope.decode = function(){
		$http.post('http://0.0.0.0:5000/weirdAlphabetDecode', {"text": $scope.text, "key": $scope.key}).
		success(function(results) {
		  $scope.result = "Odkodowany tekst: " + results;
		}).
		error(function(error) {
			$scope.result = error;
		});
	}
});

szyfratorApp.controller('atbashController', function($scope) {
	$scope.message = 'Szyfr Atbasz.';
});
