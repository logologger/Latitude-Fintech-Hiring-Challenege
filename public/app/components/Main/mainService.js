angular.module('mainService',[])

.factory('callService',function($http,$q,SharedServiceFactory,Upload,$window)
        {
   
    var authFactory={};

    authFactory.doServiceCall=function(form_data,file_img,callback){

        Upload.upload({
                url: '/api/registerUser', //webAPI exposed to upload the file
                data:{
                 file:file_img,
                 form:form_data

                }//pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.status === "success"){
                 //validate success
                 callback(resp.data.registrationNumber);
                   

                  //  $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                } else {
                   
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                callback(resp.data.registrationNumber);
                
            }, function (evt) { 
                console.log(evt);
                   });
        };
 
    return authFactory;
})





    










