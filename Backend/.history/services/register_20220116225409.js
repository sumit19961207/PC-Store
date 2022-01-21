const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.send()
   }
}

module.exports={registerUser};