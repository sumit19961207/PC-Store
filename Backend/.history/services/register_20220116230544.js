import User from "../models/user";




const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
      return res.status(400).send("Name is required");
   }
   if(!password || password.length>6){
       return res.status(400).send("Password should be required and should be min 6 character long");
   }
   let userExist = await User.findOne({email}).exec();
   if(userExist){

   }
}

module.exports={registerUser};