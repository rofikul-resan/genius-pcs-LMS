import { model, Schema, } from "mongoose";


const Student = new Schema({
    userInfo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    classInfo: {
        roll: {
            type: Number,
            require: true
        },
        classNo: {
            type: Number,
            require: true
        },
        Session: {
            type: Number,
            require: true
        },
        Groupe: {
            type: String,
            enum: ["A", "B"],
            default: "A",
            require: true
        },
        shift: {
            type: String,
            enum: ["Morning", "Evening"],
            default: "Morning",
            require: true
        }
    },
    result: [
        {
            year: {
                type: Number,
                require: true
            },
            semester: {
                type: Number,
                require: true
            },
            result: {
                type : Schema.Types.ObjectId || null,
                ref: "Result",
                default: null
            }
        }
    ]

}, { timestamps: true })