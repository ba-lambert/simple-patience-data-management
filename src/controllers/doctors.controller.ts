import { doctor } from "../models/doctors";
import { generateUniqueId } from "../helpers/generateUniqueId";

const addDoctor = async (parent: any, args: any, context: any, info: any) => {
	try {
		const newDoctor = await doctor.create(args);
		return newDoctor;
	} catch (error) {
		throw new Error(error);
	}
};

const getDoctor = async (parent: any, args: any, context: any, info: any) => {
	try {
        const newDoctor = await doctor.findOne({ _id: args.id });
        	return newDoctor;
    } catch (error) {
        throw new Error(error)
    }
};
const getAllDoctors = async (
	parent: any,
	args: any,
	context: any,
	info: any
) => {
	try {
        const newDoctor = await doctor.find();
        const id = generateUniqueId('Gasabo')
        console.log(id);
        
        	return newDoctor;
    } catch (error) {
        throw new Error(error)
    }
};
const filterDoctors = async (filters:any) => {
    try {
      const filteredDoctors = await doctor.find(filters);
      return filteredDoctors;
    } catch (error) {
      throw new Error(error);
    }
  };
const filterDoctorsResolver = async (parent:any, args:any, context:any, info:any) => {
    try {
      const filteredDoctors = await filterDoctors(args.filters);
      return filteredDoctors;
    } catch (error) {
      throw new Error(error);
    }
  };
export { addDoctor, getDoctor, getAllDoctors ,filterDoctorsResolver};
