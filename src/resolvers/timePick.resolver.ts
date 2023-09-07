import { getTimeSlots,createTimeSlots } from "../controllers/timePick";

export const timeResolver = {
    Query:{
        getTimeSlots:getTimeSlots
    },
    Mutation:{
        createTimeSlot:createTimeSlots
    }
}