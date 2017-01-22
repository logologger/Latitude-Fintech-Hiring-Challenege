
var config=require('../../../config');
var mysql = require("mysql");
var multer = require('multer');
var fileName='';
var registrationNumber='';
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            fileName=file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
            registrationNumber='LA'+datetimestamp;
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
});
var upload = multer({ //multer settings
                    storage: storage
                }).single('file');
  


var data={
    
    registerForm:function(req,res){

    var con = mysql.createConnection({
        						  host: config.host,
        						  user: config.username,
        						  password: config.password,
        						  database:config.database
        });

    	con.connect(function(err){
        if(err){
          console.log('Error connecting to DB');
          return;
        }
     console.log('Connection established');




     upload(req,res,function(err){

      console.log(req.body.form);
            if(err){
                 res.json({error_code:1,err_desc:err,status:"failed"});
                 return;
            }


            var user=req.body.form;
            user.id_card='./uploads/'+fileName;
  
  
  
      con.query('INSERT INTO registered_user SET ?',user,function(err,res){
      if(err) {
          console.log("Error here");
      }

      
      
     });

      var resJson={
        "registrationNumber":registrationNumber,
        "status":"success"

      }


          
            return res.json(resJson);
        });

});
}
}
module.exports=data;
