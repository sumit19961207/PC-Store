const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.status(400).send("Name is required");
   }
}

module.exports={registerUser};