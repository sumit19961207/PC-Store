const User = require("../models/user");
const {comparePassword} = require("../utils/user");
const jwt = require("jsonwebtoken");

//Login
const loginUser = async(req, res) => {

    try{
         const{email, password} = req.body;
         // get dat from db
         const user = await User.findOne({email}).exec();
         if(!user) return res.status(400).send("User not found");
         const check = await comparePassword(password,user.password);
         //Create signed jwt
         const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{
             expiresIn:"7d"
         });
         user.password = undefined;
         //
         res.cookie("token", token,{httpOnly:true});
         res.send(user);
    } catch(err){
       return res.status(400).send("Error, Try again");
    }
    

}

module.exports = loginUser;