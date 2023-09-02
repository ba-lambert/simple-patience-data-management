import mongoose, { Schema } from "mongoose";

export const user = mongoose.model(
    'users',
    new Schema({
        userName:String,
        email:String,
        password:String,
        profile:String
    })
)