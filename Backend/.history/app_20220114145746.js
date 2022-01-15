
var express = require("express");


const app = express();

//import other file
var admin = require("./routes/admin");


//configs




//passport



//bind routes
app.use("/api/v1/login", admin);


app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port 3000`)
    }
})