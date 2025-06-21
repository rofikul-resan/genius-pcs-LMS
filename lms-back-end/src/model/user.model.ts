import { Schema, model, Document } from "mongoose"
import { IUser } from "../Interface/user.interface"

export interface IAddress {
    village: string,
    district: string,
    upazila: string,
    postOffice: string,
    zipCode: string,
    country: string,
    division: string
}



const addressSchema = new Schema<IAddress>({
    village: String,
    district: String,
    upazila: String,
    postOffice: String,
    zipCode: String,
    country: String,
    division: String
})
const userSchema = new Schema<IUser>({
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
        bangla: {
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
            nidNumber: {
                type: Number,
                required: true
            }
        },
        motherInfo:  {
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: Number,
                
            },
            nidNumber: {
                type: Number,
                required: true
            }
        },
        birthDate: {
            type: Date,
            required: true
        },
        birthId: {
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


const User = model<IUser>("User", userSchema)

export default User