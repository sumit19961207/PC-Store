const registerUser = (req,res) => {
   const {name, email, password} = req.body;
   if(!name){
       res.sta(400)
   }
}

module.exports={registerUser};