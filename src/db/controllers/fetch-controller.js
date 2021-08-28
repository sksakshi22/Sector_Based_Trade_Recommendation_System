var fetchModel= require('../models/fetch-model');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
         //console.log(data.Name)
          res.send({userData:data});
      })
    }
}