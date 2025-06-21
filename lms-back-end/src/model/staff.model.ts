import mongoose, { Schema } from "mongoose";
import { IStaff } from "../Interface/user.interface";
import { modelName } from "../utils/constent";

const StaffSchema = new Schema<IStaff>({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: modelName.user,
        required: true,
    },
    role : {
        type: String,
        required: true,
        enum: ["Admin", "Staff"],
        default : "Staff"
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