angular.module('CommonData',[])
    
    .factory('CommonDataFactory', function() {
    var CommonDataFactory = {};
       
        CommonDataFactory.setActualData = function(data) {
            CommonDataFactory.ActualData = data;
            //sessionStorage.DeskNo = DeskNo;
        };
        CommonDataFactory.getActualData= function() {
            return CommonDataFactory.ActualData;
        };
      
    return CommonDataFactory;
});
