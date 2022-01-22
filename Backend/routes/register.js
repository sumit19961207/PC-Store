var express = require("express");
var router = express.Router();
var RegisterUser = require("../services/register");
var showUser = require("../services/register")



router.post('/',RegisterUser.registerUser);
router.get('/',showUser.showUser);


module.exports=router;
