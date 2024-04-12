import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiErrror.js"
import jwt from "jsonwebtoken"

export const verifyJwt = async (req, res,next) => {
try {
        const token = req.cookies?.token || req.headers?.authorization?.replace("Bearer ","")
        // console.log("req.cookies" ,token);
    
        if(!token) {
            throw new ApiError(401, "Unauthorized request")
        }
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password")
    
        if(!user) {
            throw new ApiError(401, "Invalid token")
        }
    
        req.user = user
        next()
} catch (error) {
    throw new ApiError(401, error?.message || "Invalid token")
}   
     
}