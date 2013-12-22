var paper = angular.module("PaperGallery", []);

paper.factory('randomNumber',function(){
	 var rNoArray = new Array();
	 var rSArray = new Array();
	 var rSNo;
	 while(rNoArray.length < 24)
	 {
	 	var rNo = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
	 	if(rNoArray.indexOf(rNo)== -1)
	 	{
	 		rNoArray.push(rNo);
	 	}
	 }
	 for (var i = 0; i < rNoArray.length ; i++) {
	 		rSNo = rNoArray[i];
	 		if(rSNo<10)
	 		{
	 			rSNo = "0"+rSNo;
	 		}
	 		rSArray.push(rSNo)
	 	};
	 return rSArray;
});

function PaperCtrl($scope,randomNumber){
	$scope.random = randomNumber;
	var Photos = {};
	var SmallPhotos = [];
	Photos.SmallPhotos = SmallPhotos;

	for (var i = 0; i < randomNumber.length; i++) {
  		element = randomNumber[i];
  		
  		var SmallPhoto = {
    			"id": element,
    			"url": "../images/MyPaper/MyPaper_S/MyPaper_S_"+element+".jpg"
    	} 
    	Photos.SmallPhotos.push(SmallPhoto);
	}
	$scope.photos =  Photos;
}

