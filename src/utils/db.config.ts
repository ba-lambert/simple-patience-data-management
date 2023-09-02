import mongoose from "mongoose";
import 'dotenv/config'

const url=process.env.DB_CONNECTION
export const connect =async ():Promise<void> =>{
    try{
        await mongoose.connect(url!)
        console.log('database connected successfully👋');
        
    }catch(error){
        console.log(error);
        
    }
}