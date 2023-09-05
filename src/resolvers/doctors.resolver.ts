import { addDoctor,getDoctor,getAllDoctors,filterDoctorsResolver } from "../controllers/doctors.controller";

export const doctorsResolver = {
    Query:{
        doctor:getDoctor,
        doctors:getAllDoctors,
        filterDoctors: filterDoctorsResolver
    },
    Mutation:{
        addDoctor:addDoctor
    }
}