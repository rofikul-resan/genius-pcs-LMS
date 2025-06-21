import { Document, Types } from "mongoose";

export interface IAttendance extends Document {
  classNo: "play" | 1 | 2 | 3 | 4 | 5;
  shift: "Morning" | "Evening";
  teacherId: Types.ObjectId;
  teacherName: string;

  markedBy: {
    id: Types.ObjectId;
    name: string;
  };

  date: Date;

  studentList: {
    id: Types.ObjectId;
    name: string;
    roll: string;
    status: "Present" | "Absent" | "Late";
    studentImg?: string; 
  }[];
}
