import { Schema, model } from "mongoose";
import { INotice } from "../Interface/notice.interface";
import { modelName } from "../utils/constant";

const NoticeSchema = new Schema<INotice>({
    publishBy: {
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        _id: {
            type: Schema.Types.ObjectId,
            ref: modelName.staff,
            required: true
        }
    },
    title: {
        type: String,
        required: true,
        index: true
    },
    details: {
        type: String,
        required: true
    },
    noticeType: {
        type: String,
        enum: ["admission", "circular", "normal"],
        required: true
    }
}, { timestamps: true });

const Notice = model<INotice>(modelName.notice, NoticeSchema);

export default Notice;