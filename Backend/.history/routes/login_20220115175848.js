var express = require('express');
var router = express.Router();

router.post('/', (req,res) =>{
    console.log(req.body);
    res.status(200)
});



module.exports=router;