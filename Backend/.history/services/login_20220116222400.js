


 const loginUser = (req, res) => {
    
        const {name,email,password} = req.body;
        console.log(JSON.stringify (req.body.name));
        //validation
        if(!name){
            res.status(400).send("Name is required")
        };
        
}
module.exports={loginUser}


