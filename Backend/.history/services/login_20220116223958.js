


 const loginUser = (req, res) => {
    
        const {name,email,password} = req.body;
        console.log (req.body);
        //validation
        if(!name) return res.status(400).send("Name is required");
module.exports={loginUser}


