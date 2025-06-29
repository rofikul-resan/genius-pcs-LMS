export class ApiError extends Error {
    constructor (
        public statusCode: number,
        public message: string = "Something went wrong",
        public errors: string[] = [],
        public stack: string = ""
    ) {
        super(message);
        this.message = message
        this.statusCode = statusCode;
        this.errors = errors;
        

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}