import { Schema, model } from "mongoose";
import { IClassRoutine } from "../Interface/classrRoutine.interface";
import { modelName } from "../utils/constant";

const ClassRoutineSchema = new Schema<IClassRoutine>({
    teacher: {
        teacherID: {
            type : Schema.Types.ObjectId,
            ref : modelName.staff,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        teacherImg: String,
        
    },
    subject: {
      type: String,
      enum: ["ইংরেজি", "গণিত", "টিফিন", "বাংলা", "আরবি", "সাধারণ জ্ঞান", "ধর্ম", "বিজ্ঞান", "সমাবেশ","ড্রইং"],
      required: true, 
      default : "সমাবেশ"
    },
    classTime: {
      type: String,
      enum: ["8.00 am - 8.15 am" , "8.15am - 9.00 am" , "9.00 am - 10.00 am" , "10.00 am - 10.20 am" , "10.20 am - 11.00 am" , "11.00 am - 11.40 am" , "11.40 am - 12.20 pm" , "12.20 pm - 1.00 pm"],
      required: true,
      default: "8.00 am - 8.15 am"
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
        ref: modelName.student,
        required: true
      }
    ]
  
}, { timestamps: true })

const ClassRoutine = model<IClassRoutine>(modelName.classRoutine, ClassRoutineSchema)

export default ClassRoutine;