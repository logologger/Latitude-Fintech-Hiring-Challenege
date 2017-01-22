
var config=require('../../config');
var dataController=require('../controller/data/dataController');





module.exports=function(app,express)
{
    var api=express.Router();
   
  
    api.post('/registerUser',dataController.registerForm);
    

    
  return api;
}
