import { Document, Types } from "mongoose";

export interface INotice extends Document {
    publishBy: {
        name: string;
        position: string;
        img: string;
        _id: Types.ObjectId
    }
    title: string;
    details: string;
    noticeType : "admission" | "circular" | "normal"
}