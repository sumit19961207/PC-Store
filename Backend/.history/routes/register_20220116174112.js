var express = require("express");
var router = express.Router();
var login = require("")

router.post("/", (req,res)=>{
  res.status(200).send("Register data recived");
})


module.exports=router;