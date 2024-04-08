import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    // wrap connecting to db in a try catch to avoid errors
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected || DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MONGODB Connection Failed " + error)
        // exit the application
        process.exit(1)
    }
}

export default connectDB