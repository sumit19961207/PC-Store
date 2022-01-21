const { json } = require("express/lib/response");



 const loginUser = (req, res) => {
    
        console.log("Hello");
        console.log(json.Stringfy(req.));
        res.status(200).send("Data Recived");
        // const {name,email,password} = req.body;
        // console(req.body);
        // //validation
        // if(!name){
        //     res.status(400).send("Name is required")
        // }

    
}
module.exports={loginUser}


