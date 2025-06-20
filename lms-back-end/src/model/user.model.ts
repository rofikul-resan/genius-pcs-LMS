import { Schema, model } from "mongoose"

const addressSchema = new Schema({
    village: String,
    district: String,
    upaZila: String,
    postOffice : String,
    zipCode : String,
    country: String,
    division: String
})
const userSchema = new Schema({
    image : {
        type: String,
        required: true
    },
    fullName: {
        english: {
            type: String,
            index: true,
            required: true,
        },
        bangle: {
            type: String,
            index: true,
            required: true
        }
    },
     email : {
            type: String,
        },
    phoneNumber : {
            type: String,
            required: true,
            index: true
            
        },
    password: {
            type: String,
            required: true,
            select: false,
        },
    personalInfo: {
       
        fatherInfo : {
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: Number,
                
            },
            nidNUmber: {
                type: Number,
                required: true
            }
        },
        motherName :  {
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: Number,
                
            },
            nidNUmber: {
                type: Number,
                required: true
            }
        },
        bathDate: {
            type: Date,
            required: true
        },
        BathID: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        presentAddress: addressSchema,
        permanentAddress: addressSchema
    }

}, { timestamps: true })


const User = model("User", userSchema)

export default User