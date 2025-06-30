import { Types } from "mongoose";
import { IUser } from "../../Interface/user.interface";
import Staff from "../../model/staff.model";
import Student from "../../model/student.model";
import User from "../../model/user.model";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";


const createUser = asyncHandler(async (req, res) => {
    const userType:string = req.params?.userType || "";
    const userData = req.body;
    if (!userData) new ApiError(400, "User data is required");

    if (!['staff', 'student'].includes(userType)) {
        throw new ApiError(400, "Invalid user type. Must be 'staff' or 'student'");
    }

    const userPersonalInfo: IUser = userData.userInfo;
    if (!userPersonalInfo) new ApiError(400, "User data is required");
    const newUser = new User(userPersonalInfo);
    await newUser.save()
    
    userData.userInfo = newUser._id;
    console.log(userData);
    
    if (userType === "staff") {
        
        const newStaff = new Staff(userData)
        await newStaff.save();

        // fine user and send response
        const userResData = Staff.findById(newStaff._id).populate("userInfo").select("-userinfo.password")
        res.status(201).json(new ApiResponse(201 , userResData , 'User created successfully' ));
    } else if (userType === "student") {
        const newStudent = new Student(userData)
        newStudent.userInfo = newUser._id as Types.ObjectId;
        await newStudent.save();

                // fine user and send response
        const userResData = Student.findById(newStudent._id).populate("userInfo").select("-userinfo.password")
        res.status(201).json(new ApiResponse(201 , userResData , "User created successfully" ));
    } else {
        throw new ApiError(400, "Invalid user type");   
    }

    res.status(201).json(new ApiResponse(201 , newUser , "User created successfully" ));
})

export default createUser;