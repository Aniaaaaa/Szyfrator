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
		
		.when('/bacon', {
			templateUrl : 'pages/Bacon.html',
			controller  : 'baconController'
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

szyfratorApp.controller('ceasarController', function($scope,$http,$route) {
	
	$http.get(API_URL+'/alphabetLength').
		success(function(results){
			$scope.alphabetLength = results;
		}).
		error(function(error){
			$scope.alphabetLength = error;
		})
	
	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}

	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/ceasarCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
				$scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}

	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/ceasarDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('vigenereController', function($scope, $http) {

	$http.get(API_URL+'/alphabet').
		success(function(results){
			$scope.alphabet = results;
			$scope.alphabet_formatted = "";
			for (i=0; i<results.length-1; ++i){
				$scope.alphabet_formatted = $scope.alphabet_formatted + results[i] + ", ";
			}
			$scope.alphabet_formatted = $scope.alphabet_formatted + results[results.length-1];
		}).
		error(function(error){
			$scope.alphabet = error;
			$scope.alphabet_formatted = error;
		})

	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}

	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/vigenereCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Zakodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}

	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/vigenereDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Odkodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('transpositionController', function($scope,$http) {

	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}

	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/transpositionCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Zakodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/transpositionDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Odkodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('baconController', function($scope,$http) {
	
	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}
	
	$scope.code = function(){
		if ($scope.text != undefined) {
			$http.post(API_URL+'/baconCode', {"text": $scope.text}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined) {
			$http.post(API_URL+'/baconDecode', {"text": $scope.text}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('originalVigenereController', function($scope,$http) {

	$http.get(API_URL+'/alphabet').
		success(function(results){
			$scope.alphabet = results;
			$scope.alphabet_formatted = "";
			for (i=0; i<results.length-1; ++i){
				$scope.alphabet_formatted = $scope.alphabet_formatted + results[i] + ", ";
			}
			$scope.alphabet_formatted = $scope.alphabet_formatted + results[results.length-1];
		}).
		error(function(error){
			$scope.alphabet = error;
			$scope.alphabet_formatted = error;
		})

	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}
	
	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/originalVigenereCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/originalVigenereDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result =results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('railFenceController', function($scope, $http) {

	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}
	
	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/railFenceCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Zakodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/railFenceDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Odkodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('weirdAlphabetController', function($scope, $http) {
	
	$http.get(API_URL+'/alphabet').
		success(function(results){
			$scope.alphabet = results;
			$scope.alphabet_formatted = "";
			for (i=0; i<results.length-1; ++i){
				$scope.alphabet_formatted = $scope.alphabet_formatted + results[i] + ", ";
			}
			$scope.alphabet_formatted = $scope.alphabet_formatted + results[results.length-1];
		}).
		error(function(error){
			$scope.alphabet = error;
			$scope.alphabet_formatted = error;
		})

	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}
	
	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/weirdAlphabetCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
		  	$scope.result = "Zakodowany tekst: " + results;
			}).
			error(function(error) {
					$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/weirdAlphabetDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = "Odkodowany tekst: " + results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});

szyfratorApp.controller('atbashController', function($scope, $http) {
	
	$scope.pasteResultToInput = function(){
		$scope.text = $scope.result;
		$scope.result = "";
	}
	
	$scope.code = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/atbashCode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
	
	$scope.decode = function(){
		if ($scope.text != undefined && $scope.key != undefined) {
			$http.post(API_URL+'/atbashDecode', {"text": $scope.text, "key": $scope.key}).
			success(function(results) {
			  $scope.result = results;
			}).
			error(function(error) {
				$scope.result = error;
			});
		}
	}
});
