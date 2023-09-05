import mongoose, { Schema } from "mongoose";

export const doctor = mongoose.model(
    'doctors',
    new Schema({
        fullNames:String,
        email:String,
        password:String,
        gender:{
            type:String,
            enum:["male","female"]
        },
        hospital:String,
        district:String,
        role:{
            type:String,
            enum:["nurse","doctor","psychologist"]
        },
        province:String,
        profile:String
    })
)