import { Document, Types } from "mongoose";
import { IAddress } from "../model/user.model";

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
}



export interface IResultEntry {
    year: number;
    classNO: number;
    result?: Types.ObjectId | null; 
}

export interface IClassInfo {
    roll: number;
    classNo: number;
    session: number;
    group: 'A' | 'B';
    shift: 'Morning' | 'Evening';
}

export interface IStudent extends Document {
    userInfo: Types.ObjectId | IUser; 
    classInfo: IClassInfo;
    result: IResultEntry[];
}

