import { signUpController,loginController } from "../controllers/auth"

export const signUp = {
    Mutation:{
        signup:signUpController,
        login:loginController
    }
}