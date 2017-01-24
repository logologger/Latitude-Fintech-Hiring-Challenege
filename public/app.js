var app=angular.module("myApp",['mainController','ngAnimate','nvd3','TypeController','ui.router','CommonData','ngMaterial','ngMessages','SharedServiceFactoryModule','mainService','ngFileUpload'])


.config(function($stateProvider, $urlRouterProvider,$httpProvider)
       {
    
      $stateProvider
        .state('/', {
            url: '/',
            templateUrl:'app/components/Main/main.html',
            controller:'MainController',
            controllerAs:'main'
        })

          .state('showTypePie', {
            url: '/type',
            templateUrl:'app/components/Type/type.html',
            controller:'typeController',
            controllerAs:'typePie'
            
        });



         

       $urlRouterProvider.otherwise('/');
    
  


    // $httpProvider.interceptors.push('AuthInterceptor'); 
    
})




