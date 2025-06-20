import mongoose from "mongoose";
import { mongodbUrl } from "../utils/constent";


const connectDB = async () : Promise<void>  => {
    try {
        await mongoose.connect(mongodbUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error ) 
    }
};

export default connectDB;