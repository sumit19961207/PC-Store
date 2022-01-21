var User = require() "../models/user";




let registerUser = (req,res) => {
   const {name, email, password} = req.body;
   res.status(200).send("Register data recived");
   // if(!name){
   //    return res.status(400).send("Name is required");
   // }
   // if(!password || password.length>6){
   //     return res.status(400).send("Password should be required and should be min 6 character long");
   // }
   // let userExist = await User.findOne({email}).exec();
   // if(userExist){
   //      res.status(400).send("Email has taken");
   // }
}

module.exports={registerUser};