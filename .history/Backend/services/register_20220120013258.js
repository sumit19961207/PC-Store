var User = require( "../models/user");




let registerUser = (req,res) => {
   const {name, email, password} = req.body;
   
   if(!name){
      return res.status(400).send("Name is required");
   }
   if(!password || password.length>6){
       return res.status(400).send("Password should be required and should be min 6 character long");
   }
  let userExit = await User.findOne({email}).ex
}

module.exports={registerUser};