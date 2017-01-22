var app=angular.module("myApp",['mainController','BattleController','ngAnimate', 'ui.router','CommonData','ngMaterial','ngMessages','SharedServiceFactoryModule','mainService','ngFileUpload'])


.config(function($stateProvider, $urlRouterProvider,$httpProvider)
       {
    
      $stateProvider
        .state('/', {
            url: '/',
            templateUrl:'app/components/Main/main.html',
            controller:'MainController',
            controllerAs:'main'
        })

          .state('battles', {
            url: '/battle?data',
            templateUrl:'app/components/Battle/battle.html',
            controller:'battleController',
            controllerAs:'battle'
            
        });



         

       $urlRouterProvider.otherwise('/');
    
  


    // $httpProvider.interceptors.push('AuthInterceptor'); 
    
})




