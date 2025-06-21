import mongoose, { Schema } from "mongoose";

const StaffSchema = new Schema({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    roll : {
        type: String,
        required: true,
        enum: ["Admin", "Staff"],
        default : "Staff"
    },
    classTime: [
        {
            type: Schema.Types.ObjectId,
            ref: "ClassRutin",
        },
    ]


}, { timestamps: true })

const    Staff = mongoose.model("Staff", StaffSchema) 
export default Staff