import mongoose, { Schema } from "mongoose";
import { IStaff } from "../Interface/user.interface";

const StaffSchema = new Schema<IStaff>({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
            ref: "ClassRoutine",
        },
    ]


}, { timestamps: true })

const    Staff = mongoose.model<IStaff>("Staff", StaffSchema) 
export default Staff