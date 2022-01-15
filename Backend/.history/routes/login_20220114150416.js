var express = require('express');
var router = express.Router();

router.post('/', (req,res) =>{
    res.send("login");
});



module.exports=router;