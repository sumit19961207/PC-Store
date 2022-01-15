
var express = require("express");
var mongoose = require("mongoose");

const app = express();

//import other file
var admin = require("./routes/admin");
var login = require("./routes/login");

//DB
mongoose.connect(process.e)

//configs




//passport



//bind routes
app.use("/api/v1/admin", admin);
app.use("/api/v1/login",login);


app.listen(5000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port 5000`)
    }
})