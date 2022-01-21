var express = require('express');
var router = express.Router();
var login = require("../services/login")

router.post('/', login.loginUser);



module.exports=router;