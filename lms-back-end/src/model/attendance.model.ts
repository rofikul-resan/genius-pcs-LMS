import mongoose, { Schema } from "mongoose";
import { IAttendance } from "../Interface/attendance.interface";
import { modelName } from "../utils/constent";




const AttendanceSchema = new Schema<IAttendance>(
  {
    classNo: {
      type: Schema.Types.Mixed, // because it includes string + number
      enum: ["play", 1, 2, 3, 4, 5],
      required: true
    },
    shift: {
      type: String,
      enum: ["Morning", "Evening"],
      required: true
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: modelName.staff,
      required: true
    },
    teacherName: {
      type: String,
      required: true
    },
    markedBy: {
      id: {
        type: Schema.Types.ObjectId,
        ref: modelName.staff, // or "Admin" if you have a specific Admin model
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    date: {
      type: Date,
      default: Date.now,
      required: true
    },
    studentList: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: modelName.student,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        roll: {
          type: String,
          required: true
        },
        status: {
          type: String,
          enum: ["Present", "Absent", "Late"],
          required: true
        },
        studentImg: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Attendance = mongoose.model<IAttendance>(modelName.attendance, AttendanceSchema);
export default Attendance