var express = require("express");
var router = express.Router();
var registerUser = require("../services/register")


router.post('/',reg)
// router.post("/", (req,res)=>{
//   res.status(200).send("Register data recived");
// })


module.exports=router;