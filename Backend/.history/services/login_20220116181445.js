


const register = (req,res) => {
    {
        const {name,email,password} = req.body;
        console()
        //validation
        if(!name){
            res.status(400).send("Name is required")
        }
    
    }
}   

module.exports=register;