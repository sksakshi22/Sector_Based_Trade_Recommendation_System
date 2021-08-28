const express = require('express');
const router = express.Router();


router.get("",(req , res)=> {
    res.send("Hello Recommondation sys from server");
});

router.post('/login', (req,res) => {
    console.log(req.body);
    res.send({ message : req.body });
});
 
module.exports = router ;
