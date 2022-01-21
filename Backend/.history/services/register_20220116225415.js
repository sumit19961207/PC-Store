const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.send(400)
   }
}

module.exports={registerUser};