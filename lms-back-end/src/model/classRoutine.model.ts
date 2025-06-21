import { Schema, model } from "mongoose";
import { IClassRoutine } from "../Interface/classrRoutine.interface";

const ClassRoutineSchema = new Schema<IClassRoutine>({
    teacher: {
        teacherID: {
            type : Schema.Types.ObjectId,
            ref : "Staff"
        },
        name : {
            type : String,
            required : true
        },
        teacherImg: String,
        
    },
    subject: {
      type: String,
      required: true
    },
    classTime: {
      type: String,
      required: true
    },
    classNo: {
      type: Schema.Types.Mixed,
      enum: ["play", 1, 2, 3, 4, 5],
      required: true
    },
    group: {
      type: String,
      enum: ["A", "B"],
      required: true
    },
    shift: {
      type: String,
      enum: ["Morning", "Evening"],
      required: true
    },
    studentList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
      }
    ]
  
}, { timestamps: true })

const ClassRoutine = model<IClassRoutine>("ClassRoutine", ClassRoutineSchema)

export default ClassRoutine;