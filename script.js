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
	$scope.message = 'Szyfr Vigenera.';
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

szyfratorApp.controller('weirdAlphabetController', function($scope) {
	$scope.message = 'Szyfr \"Dziwny Alfabet\".';
});

szyfratorApp.controller('atbashController', function($scope) {
	$scope.message = 'Szyfr Atbasz.';
});
