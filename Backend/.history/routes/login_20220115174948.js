var express = require('express');
var router = express.Router();

router.post('/', (req,res) =>{
    console.log(res.body.data);
});



module.exports=router;