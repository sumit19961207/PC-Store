
var express = require("express");
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();


const app = express();

//import other file
var admin = require("./routes/admin");
var login = require("./routes/login");
var register =  require("./routes/register");

//DB
mongoose
  .connect(process.env.DATABASE, {
        useUnifiedTopology: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

//configs




//passport



//bind routes
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/admin", admin);
app.use("/api/v1/login",login);
app.use("/api/v1/register",register);


app.listen(5000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port 5000`)
    }
});