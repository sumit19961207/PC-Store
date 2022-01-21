import mongoose  from "mongoose";
var Us


const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },

    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 64
    }
});


module.exports=userSchema;