var express = require("express");
var router = express.Router();
var RegisterUser = require("../services/register")


router.post('/',RegisterUser.re);
// router.post("/", (req,res)=>{
//   res.status(200).send("Register data recived");
// })


module.exports=router;
