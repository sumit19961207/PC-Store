var express = require("express");
var router = express.Router();
var RegisterUser = require("../services/register")


router.post('/',RegisterUser);


module.exports=router;
