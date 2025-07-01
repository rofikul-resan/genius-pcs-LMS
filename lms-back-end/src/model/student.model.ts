import { model, Schema } from "mongoose";
import { IStudent } from "../Interface/user.interface";
import { modelName } from "../utils/constant";
import { userSchema } from "./user.model";


const studentSchema = new Schema<IStudent>({
    userInfo: userSchema,
    classInfo: {
        roll: {
            type: Number,
            required: true
        },
        classNo: {
            type: Number,
            required: true,
            enum: ["play","baby",1,2,3,4,5]
        },
        session: {
            type: Number,
            required: true
        },
        group: {
            type: String,
            enum: ["A", "B"],
            default: "A",
            required: true
        },
        shift: {
            type: String,
            enum: ["Morning", "Evening"],
            default: "Morning",
            required: true
        }
    },

},{ timestamps: true });

const Student = model<IStudent>(modelName.student, studentSchema);

export default Student;