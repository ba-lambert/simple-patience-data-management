import { user } from "../models/auth";
import bcrypt from "bcrypt";
import { generateUserToken } from "../utils/generateToken";

const saltRounds = 10;
const signUpController = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  try {
    const data = args;
    const hashedPassword = bcrypt.hashSync(data.password, saltRounds);
    const newUser = new user({
      userName: data.username,
      email: data.email,
      password: hashedPassword,
      profile: data.profile,
    });
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
};

const loginController = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  try {
    const data = args;
    const validateUser = await user.findOne({ email: data.email });
    if (!validateUser) {
      throw new Error("User not found");
    }
    const checkPassword = bcrypt.compareSync(data.password, validateUser.password);
    if(!checkPassword){
      throw new Error('Incorrect password')
    }
    const token =await generateUserToken(data)
    console.log(token);
    
    return validateUser;
  } catch (error) {
    return error;
  }
};

export { signUpController, loginController };
