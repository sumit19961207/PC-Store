


 const loginUser = (req, res) => {
    
        const {name,email,password} = req.body;
        console.log(req.body.nmae);
        //validation
        if(!name){
            res.status(400).send("Name is required")
        };
        
}
module.exports={loginUser}


