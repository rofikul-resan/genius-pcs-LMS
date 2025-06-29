import { Document, Types } from "mongoose";
import { IAddress } from "../model/user.model";
import { IClassRoutine } from "./classrRoutine.interface";

export interface IUser extends Document {
    image: string;
    fullName: {
        english: string;
        bangla: string;
    };
    email?: string;
    phoneNumber: string;
    password?: string;
    personalInfo: {
        fatherInfo: {
            name: string;
            phoneNumber?: number;
            nidNumber: number;
        };
        motherInfo: {
            name: string;
            phoneNumber?: number;
            nidNumber: number;
        };
        birthDate: Date;
        birthId: string;
        nationality: string;
        presentAddress: IAddress;
        permanentAddress: IAddress;
        
    };
    hashPassword?(password: string) : Promise<string>;
    comparePassword?(password: string) : Promise<boolean>;
}



export interface IResultEntry {
    year: number;
    classNO: number;
    result?: Types.ObjectId | null; 
}

export interface IClassInfo {
    roll: number;
    classNo:"play"| 1|2|3|4|5;
    session: number;
    group: 'A' | 'B';
    shift: 'Morning' | 'Evening';
}

export interface IStudent extends Document {
    userInfo: Types.ObjectId | IUser; 
    classInfo: IClassInfo;
    result: IResultEntry[];
}


export interface IStaff extends Document {
    userInfo: Types.ObjectId | IUser; 
    role: "Admin" | "Staff";
    position : string;
    education: string;
    classTime: IClassRoutine[]
}


