import mongoose, { Schema } from "mongoose";

export const time = mongoose.model('time',new Schema({
    doctorId:String,
    timeRange:[String]
}))