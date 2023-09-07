import { time } from "../models/time_date";

const createTimeSlots = async(parent:any,args:any) =>{
    try{
        const data = await time.create(args)
        return data
    }catch(error){
        return new Error('something went wrong')
    }
}

const getTimeSlots = async(parent:any,args:any) =>{
    try{
        const data = await time.find()
        return data
    }catch(error){
        return new Error('something went wrong')
    }
}

export {
    createTimeSlots,
    getTimeSlots
}