import { Document, Types } from "mongoose";


export interface IClassRoutine extends Document {
    teacher: {
        teacherID: Types.ObjectId;
        name: string;
        teacherImg : string;
    },
    subject: "ইংরেজি" | "গণিত" | "টিফিন" | "বাংলা" | "আরবি" | "সাধারণ জ্ঞান" | "ধর্ম" | "বিজ্ঞান" | "সমাবেশ" | "ড্রইং" ;   
    classTime: "8.00 am - 8.15 am" | "8.15am - 9.00 am" | "9.00 am - 10.00 am" | "10.00 am - 10.20 am" | "10.20 am - 11.00 am" | "11.00 am - 11.40 am" | "11.40 am - 12.20 pm" | "12.20 pm - 1.00 pm";
    classNo:"play"| 1|2|3|4|5;
    group: 'A' | 'B';
    shift: 'Morning' | 'Evening';
    studentList: Types.ObjectId[];
    
}