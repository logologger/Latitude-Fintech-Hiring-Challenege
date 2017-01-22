angular.module('mainController',[])

.controller('MainController',function($rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;
	 vm.form={};
	
	

	 vm.submitForm=function(){


	 //	var f = document.getElementById('id_card').files[0],r = new FileReader();

	 	//console.log("file is "+f);
  		// r.onloadend = function(e){
    // 	var data = e.target.result;
    // 	//vm.form.id_card=data;
    // 	console.log("Uploading form image "+data);
    // 	vm.id_card=data;
    // 	console.log("Image is "+typeof vm.id_card);
    // 	vm.form.id_card=typeof data;
    // 	console.log("Submitting form with values "+JSON.stringify(vm.form));




    	//Call the Service after loading the image

      console.log(vm.form);
    	callService.doServiceCall(vm.form,vm.id_card,function(registrationNumber){

        alert(registrationNumber);
      });

    //send your binary data via $http or $resource or do anything else with it
  	//	}
  	//	 r.readAsArrayBuffer(f);
  		//r.readAsBinaryString(f);

	 	


	 }

	 vm.preview=function(){



	 }
	 vm.uploadImage=function(){
	 	


	 }



  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    
})

















