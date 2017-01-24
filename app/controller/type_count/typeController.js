 //select  type,count(*) as `num` from registered_user group by type;


var config=require('../../../config');
var mysql = require("mysql");
var sql_result={};

var typeCount={
    
    giveCount:function(req,res){

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




   


            
  
  
      con.query('select  type,count(*) as count from registered_user group by type',function(err,res_sql){
      if(err) {
          console.log("Error here");
      }

      //console.log(res);

      sql_result.result=res_sql;
      sql_result.status="success";

      return res.json(sql_result);
      
     });

      // var resJson={
        
      //   "status":"success"

      // }

    //  resJson.count=sql_result;

      
          
            
       

});
}
}
module.exports=typeCount;
