import { model, Schema } from "mongoose";
import { IStudent } from "../Interface/user.interface";
import { modelName } from "../utils/constent";


const studentSchema = new Schema<IStudent>({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: modelName.user,
        required: true,
    },
    classInfo: {
        roll: {
            type: Number,
            required: true
        },
        classNo: {
            type: Number,
            required: true,
            enum: ["play",1,2,3,4,5]
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
            classNo: {
                type: Number,
                required: true
            },
            result: {
                type: Schema.Types.ObjectId,
                ref: modelName.result,
                default: null
            }
        }
    ]

},{ timestamps: true });

const Student = model<IStudent>(modelName.student, studentSchema);

export default Student;