import { Router } from "express";

import createTaskRouter from './task';

const createRouter = (): Router => {
    const router = Router();
    router.use('/tasks', createTaskRouter());
    return router;
};

export default createRouter;