import 



const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.status(400).send("Name is required");
   }
   if(!password || password.length>6){
       res.status(400).send("Password should be required and should be min 6 character long");
   }
}

module.exports={registerUser};