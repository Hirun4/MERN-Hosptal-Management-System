import mongoose from "mongoose"
import validator from "validator"

const userSchema  = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"]
    },
    lastName:{
        type:String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone:{
        type:String,
        required: true,
        minLength: [10, "phone number must contain 10"],
        maxLength: [10, "phone number must contain 10"]
    },
    nic:{
        type:String,
        required: true,
        minLength: [12, "nic must contain 12"],
        maxLength: [12, "nic must contain 12"]
        
       
    },


});

export const User = mongoose.model("Message", userSchema);