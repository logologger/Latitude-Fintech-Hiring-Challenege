angular.module('TypeController',[])

.controller('typeController',function($stateParams,$rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;

	 //Call the service from here and get the data and modify it according to the given below parameters

	SharedServiceFactory.ServiceCall('/api/getTypeCount', '', 'GET', successCallBack, errorResponse)
	

	function successCallBack(data){

		console.log(data.data.status);

		delete data.data.status;

		vm.data=data.data.result;
		//console.log("Rajat "+JSON.stringify(vm.data));
	}
	function errorResponse(data){

		



	}


	vm.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.type;},
                y: function(d){return d.count;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

//         vm.data = [
//             {
//                 key: "One",
//                 y: 5
//             },
//             {
//                 key: "Two",
//                 y: 2
//             },
//             {
//                 key: "Three",
//                 y: 9
//             },
//             {
//                 key: "Four",
//                 y: 7
//             },
//             {
//                 key: "Five",
//                 y: 4
//             },
//             {
//                 key: "Six",
//                 y: 3
//             },
//             {
//                 key: "Seven",
//                 y: .5
//             }
// ];
 	



	 	


	 });




  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    


















