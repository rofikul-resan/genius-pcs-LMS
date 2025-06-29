import mongoose from "mongoose"
import { Schema, model} from "mongoose"
import { IUser } from "../Interface/user.interface"
import { modelName } from "../utils/constant"
import bcrypt from "bcrypt"


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




userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (err) {
        next(err as Error);
    }
});

userSchema.methods.comparePassword= async function(password : string){
    return await bcrypt.compare(password, this.password)
}

const User = model<IUser>(modelName.user, userSchema)

export default User