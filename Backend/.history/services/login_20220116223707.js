


 const loginUser = (req, res) => {
    
        const body = req.body;
        console.log (req.body);
        //validation
        if(!body.name){
            res.status(400).send("Name is required")
        };
        
}
module.exports={loginUser}

