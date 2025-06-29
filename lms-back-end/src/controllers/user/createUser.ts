import { Types } from "mongoose";
import { IStaff, IUser } from "../../Interface/user.interface";
import Staff from "../../model/staff.model";
import Student from "../../model/student.model";
import User from "../../model/user.model";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const createUser = asyncHandler(async (req, res) => {
    const userType = req.params.userType;
    const userData = req.body;
    if (!userData) new ApiError(400, "User data is required");

    const userPersonalInfo: IUser = userData.userInfo;
    if (!userPersonalInfo) new ApiError(400, "User data is required");
    const newUser = new User(userPersonalInfo);
    await newUser.save()
    

    if (userType === "staff") {
        const newStaff = new Staff(userData)
        newStaff.userInfo = newUser._id as Types.ObjectId;
        await newStaff.save();
        const userResData = 
        
         res.status(201).json(new ApiResponse(201 , newStaff , "User created successfully" ));
    } else if (userType === "student") {
        const newStudent = new Student(userData)
        newStudent.userInfo = newUser._id as Types.ObjectId;
        await newStudent.save();
    } else {
        throw new ApiError(400, "Invalid user type");   
    }

    res.status(201).json(new ApiResponse(201 , newUser , "User created successfully" ));
})

export default createUser;