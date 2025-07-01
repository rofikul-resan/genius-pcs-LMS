import Staff from "../../model/staff.model";
import Student from "../../model/student.model";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { staffSchemaZ, studentSchemaZ } from "../../validator/user.zod.schema";


const createUser = asyncHandler(async (req, res) => {
    const userType:string = req.params?.userType || "";
    const userData = req.body;

    if (!userData) throw new ApiError(400, "User data is required");
    if (!['staff', 'student'].includes(userType)) {
        throw new ApiError(400, "Invalid user type. Must be 'staff' or 'student'");
    }
    console.log(userData);
    
    if (userType === "staff") {
        const newStaff = staffSchemaZ.safeParse(userData);
        // error if fail to validate 
        if (!newStaff.success) throw new ApiError(400, newStaff.error.message);
        
        const staff = await Staff.create(newStaff.data)


        // fine user and send response
        const userResData = Staff.findById( staff._id).select("-userinfo.password")
        res.status(201).json(new ApiResponse(201, userResData, 'User created successfully'));
        

    } else if (userType === "student") {
       const newStudent = studentSchemaZ.safeParse(userData);
        // error if fail to validate 
        if (!newStudent.success) throw new ApiError(400, newStudent.error.message);
        
        const student = await Student.create(newStudent.data)

                // fine user and send response
        const userResData = Student.findById(student._id).select("-userinfo.password")
        res.status(201).json(new ApiResponse(201 , userResData , "User created successfully" ));
    } else {
        throw new ApiError(400, "Invalid user type");   
    }

    res.status(201).json(new ApiResponse(201 , "" , "User created successfully" ));
})

export default createUser;