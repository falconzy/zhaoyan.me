

var app = angular.module("AGapp", [])
				 .config(AGRouter);

app.factory('Airports',function(){
	return 	Airports = 
	{
		"MCI" :{
				 "code"	: "MCI",
				 "name" : "Kansas City International Airport",
				 "city"	: "Kansas City"	 
				},

		"STL" :{
				"code"	: "STL",
				"name" 	: "Lambert-St International Airport",
				"city"	: "St.Louis"	 
				}
	}
}) ;

function MenuCtrl($scope){
	//$scope.mainActive = "active";
	$scope.setActive = function(type){
		$scope.mainActive ='';
		$scope.viewActive ='';
		$scope[type + 'Active'] = 'active';
		console.log($scope.mainActive);
		console.log($scope.viewActive);
	}
}

function AppCtrl($scope,Airports){
	$scope.Airports = Airports;
		$scope.currentAirport = null;
		$scope.setCurrentAirport = function($code){
				$scope.currentAirport = $scope.Airports[$code];
	}
}

function airportcodeCtrl($scope,$routeParams,Airports){
	console.log($routeParams);
	$scope.Airports = Airports;
		$scope.currentAirport = $scope.Airports[$routeParams.airportCode];
		console.log($scope.setCurrentAirport);
}

function AGRouter ($routeProvider){
	//$routeProvider.when('', {template: '', controller: });
	$routeProvider.when('/', {template: '<h1>list all airports</view>',
					controller: function($scope){
						$scope.setActive('main');
					}
				})
				  .when('/view',{templateUrl :'./CommingSoon.html',
				  	controller: function($scope){
						$scope.setActive('view');
					}
				})
				  .when('/code/:airportCode',{templateUrl :'./airportcode.html',
				   controller : 'airportcodeCtrl'});
}