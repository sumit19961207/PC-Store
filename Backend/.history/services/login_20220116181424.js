


const register = (req,res) => {
    {
        const {name,email,password} = req.body;
        //validation
        if(!name){
            res.status(400).send("Name is required")
        }
    
    }
}   

module.exports
