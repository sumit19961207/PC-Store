const PORT = process.env.PORT || 5000;
var express = require("express");


const app = express();

//import other file



//configs







app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Server Started. Server listening to port ${PORT}`)
    }
})