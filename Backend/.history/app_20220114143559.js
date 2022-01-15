const PORT = process.env.PORT || 5000;
var express = require("express");
const { append } = require("express/lib/response");


const app = express();





app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port ${PORT}`)
    }
})