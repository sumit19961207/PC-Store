var mongoose = require("mongoose");


var userSchema = require("../schemas/user");


var UserModel = mongoose.model('Usermodel', userSchema);