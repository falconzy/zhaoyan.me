var paper = angular.module("PaperGallery", []);

paper.factory('randomNumber',function(){
	 var rNoArray[];
	 while(rNoArray.length>23)
	 {
	 	var rNo = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
	 	if(rNoArray.indexOf("rNo")== -1)
	 	{
	 		rNoArray.push(rNo);
	 	}
	 }
	 return rNoArray;
});

function PaperCtrl($scope,randomNumber){
	$scope.random = randomNumber;
}

