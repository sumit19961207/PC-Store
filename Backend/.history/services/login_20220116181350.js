


const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        //validation
        if(!name){
            res.status(400).send("Name is required")
        }
        if(password)
    }
}   
