const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.status(400).send("Name is required");
   }
   if(!password || password.length>6){
       res.status(400).
   }
}

module.exports={registerUser};