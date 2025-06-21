import { model, Schema } from "mongoose";
import { IStudent } from "../Interface/user.interface";


const studentSchema = new Schema<IStudent>({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    classInfo: {
        roll: {
            type: Number,
            required: true
        },
        classNo: {
            type: Number,
            required: true
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
    result: [
        {
            year: {
                type: Number,
                required: true
            },
            classNO: {
                type: Number,
                required: true
            },
            result: {
                type: Schema.Types.ObjectId,
                ref: "Result",
                default: null
            }
        }
    ]

},{ timestamps: true });

const Student = model<IStudent>("Student", studentSchema);

export default Student;