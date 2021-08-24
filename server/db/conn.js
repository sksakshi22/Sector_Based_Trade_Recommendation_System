const mongoose = require('mongoose');
//const db = process.env.DATABASE;


mongoose.connect("mongodb://localhost:27017/CitiDatabase",{
    //callback function 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => { 
    console.log('connection successful');
}).catch((err) => console.log('no connection '));
var conn = mongoose.connection;
conn.once('open', function(){
    console.log("connected to mongodb successfully");
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;



