angular.module('BattleController',[])

.controller('battleController',function($stateParams,$rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;
	// vm.show=JSON.stringify(JSON.parse($stateParams.data));
	 vm.query = {};
    vm.name = 'battle_type';
	vm.show=$stateParams.data;
	var data=CommonDataFactory.getActualData();
	var currentKingData=data[vm.show];

	console.log("Current King data is "+typeof currentKingData);
	if(typeof currentKingData!=="undefined")
	vm.battleData=currentKingData.battles;
	else{
		console.log("what "+data[""]);
		
		currentKingData=data[""];
		vm.battleData=currentKingData.battles;

}





	 	


	 });




  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    


















