
var express = require("express");


const app = express();

//import other file
var admin = require("./routes/admin");
var login = require("./routes/login");


//configs




//passport



//bind routes
app.use("/api/v1/login", admin);
app.use("/api/")


app.listen(5000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port 5000`)
    }
})