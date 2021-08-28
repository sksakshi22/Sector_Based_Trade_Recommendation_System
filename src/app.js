const express = require('express');
const dotenv=require('dotenv');
const path = require('path');
//const routerPath = require('./router/auth.js')

//now using app we can access all methods of express.
const app = express();


//checking

//environment variable
//process.env.port will run our application on availab
const port= process.env.PORT || 3000 ;

const static_path= path.join(__dirname,"../server/public");
app.use(express.static(static_path));
app.get('/',function(req,res){
    res.render(login.html)
});

app.get('/index',function(req,res){
    res.render(index.html)
})

//app.use(express.json);

//mongodb connection
// var fetchRouter = require('../server/db/routes/fetch-route');
// app.use('/', fetchRouter);

//dotenv.config({path: './config.env'});
//require('./db/conn');
//const findResult = await RegisteredUser.find({
//    name: "Sampada",
 //   password : "sam123"
//})

//to convert the json data into object 

//linking our router file to make it easy
//app.use('/',require('./router/auth'));

//public static path


//app.get('/login',function(req,res){
//res.render(login.html)
//}) 

//login validation
// app.post('/login', async(req,res) => {
//     try{
//         const username= "sampada"
//         const password= "123";
//         Registe
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// })

//app.use('/',routerPath)

app.listen(port, () => {
    console.log(`listening to the port  at ${port} `)
})
