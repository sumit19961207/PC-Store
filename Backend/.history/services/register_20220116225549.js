const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.status(400).send("Name is required");
   }
   if(!password || password.l)
}

module.exports={registerUser};