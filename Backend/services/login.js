
//Login

 const loginUser = (req, res) => {
    
        const {name,email,password} = req.body;
        console.log (req.body.name);
        //validation
        if(!name) {
            res.status(400).send("Name is required");
        } 
        if(!password || password.lenght>6){
            res.status(400).send("Password should be required and should be min 6 character long")
        }
        
 }
module.exports={loginUser}


