var express = require('express');
var router = express.Router();
var login = require("../services/login")

router.post('/', loginUser);



module.exports=router;