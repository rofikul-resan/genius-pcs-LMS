import 'dotenv/config';

export const mongodbUrl: string = process.env.MONGODB_URL ?? '';
export const modelName = {
    user : "User",
    student : "Student",
    staff : "Staff",
    classRoutine : "ClassRoutine",
    result : "Result",
    attendance : "Attendance"
}

