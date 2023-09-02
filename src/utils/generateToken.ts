import jwt from'jsonwebtoken'

export const generateUserToken = async (data:any) =>{
    const payload = {
        userName:data.userName,
        email:data.email
    }
    const token = await jwt.sign({
        data:payload,
    },'secret',{expiresIn:'1h'})
    return token
}