var mongoose=require('mongoose');
var db = require('../conn');
// create an schema
var userSchema = new mongoose.Schema({
            Name: String,
            Pass :String
        });

userTable=mongoose.model('Users',userSchema);
module.exports={
     
     fetchData:function(callback){
        //var Name = "sampada"
        var userData =userTable.findOne({Name: 'sampada'});
        //console.log(userData)
        console.log(userTable.findOne({Name: 'sampada'}))

        userData.exec(function(err, data){
            if(err) throw err;
            //console.log(data.Name);
        
            return callback(data);
        })
        
     }
}