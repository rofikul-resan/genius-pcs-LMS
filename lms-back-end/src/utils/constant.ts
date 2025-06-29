import 'dotenv/config';

export const mongodbUrl: string = process.env.MONGODB_URL ?? '';
export const jwtSecret: string = process.env.JWT_SECRET ?? '';


export const modelName = {
    user : "User",
    student : "Student",
    staff : "Staff",
    classRoutine : "ClassRoutine",
    result : "Result",
    attendance : "Attendance"
}

