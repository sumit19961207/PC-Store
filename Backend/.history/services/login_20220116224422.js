


 const loginUser = (req, res) => {
    
        const {name,email,password} = req.body;
        console.log (req.body.name);
        //validation
        if(!name) {
            res.status(400).send("Name is required");
        } 
        if(!password || password)
 }
module.exports={loginUser}


