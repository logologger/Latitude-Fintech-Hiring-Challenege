
var config=require('../../config');
var dataController=require('../controller/data/dataController');
var typeController=require('../controller/type_count/typeController');





module.exports=function(app,express)
{
    var api=express.Router();
   
  
    api.post('/registerUser',dataController.registerForm);
    api.get('/getTypeCount',typeController.giveCount);
    

    
  return api;
}
