import type { NextFunction, Request, Response } from "express";
import { ExtendedError } from "../types/error";

const errorHandler = (error: ExtendedError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    res.status(status).json({
        error: {
            message: error.message || 'Internal server error',
        },
    });
};

export default errorHandler;