var express = require("express");
var router = express.Router();

router.post("/", (req,res)=>{
  res.status(200).send("")
})


module.exports=router;
