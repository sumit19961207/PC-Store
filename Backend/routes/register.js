var express = require("express");
var router = express.Router();
var RegisterUser = require("../services/register")


router.post('/',RegisterUser.registerUser);


module.exports=router;
