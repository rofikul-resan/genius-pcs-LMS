import { Request, Response, NextFunction, RequestHandler } from 'express';

// export const asyncHandler = (
//     fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
// ): RequestHandler => {
//     return (req, res, next) =>
//         Promise.resolve(fn(req, res, next)).catch(next);
// };

export const asyncHandler = (callBackFn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(callBackFn(req, res, next)).catch((error)=> next(error));
    };
};


