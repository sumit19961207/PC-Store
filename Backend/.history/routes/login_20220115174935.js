var express = require('express');
var router = express.Router();

router.post('/', (req,res) =>{
    console.log(res.body.email);
});



module.exports=router;