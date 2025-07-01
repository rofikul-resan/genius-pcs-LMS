import mongoose, { Schema } from "mongoose";
import { IStaff } from "../Interface/user.interface";
import { modelName } from "../utils/constant";
import { userSchema } from "./user.model";

const StaffSchema = new Schema<IStaff>({
    userInfo: userSchema,
    role : {
        type: String,
        required: true,
        enum: ["Admin", "Staff"],
        default : "Staff"
    },
    position : {
        type: String,
        required: true
    },
    education : {
        type: String,
        required: true
    },
    classTime: [
        {
            type: Schema.Types.ObjectId,
            ref:modelName.classRoutine,
        },
    ]


}, { timestamps: true })

const    Staff = mongoose.model<IStaff>(modelName.staff, StaffSchema) 
export default Staff