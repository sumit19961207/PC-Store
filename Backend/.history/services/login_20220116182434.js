


const login = (req,res) => {
    {
        const {name,email,password} = req.body;
        console(req.body);
        //validation
        if(!name){
            res.status(400).send("Name is required")
        }
    
    }
}   

module.exports=register;

// console.log("Hello");
//     console.log(req.body);
//     res.status(200).send("Data Recived");