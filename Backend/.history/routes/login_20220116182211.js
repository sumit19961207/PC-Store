var express = require('express');
var router = express.Router();
var login = require

router.post('/', (req,res) =>{
    console.log("Hello");
    console.log(req.body);
    res.status(200).send("Data Recived");
});



module.exports=router;