import { Document, Types } from "mongoose";


export interface IClassRoutine extends Document {
    teacher: {
        teacherID: Types.ObjectId;
        name: string;
        teacherImg : string;
    },
    subject: string;
    classTime: string;
    classNo:"play"| 1|2|3|4|5;
    group: 'A' | 'B';
    shift: 'Morning' | 'Evening';
    studentList: Types.ObjectId[];
    
}