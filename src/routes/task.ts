import { Router } from "express";

import createTaskController from '../controllers/task';

const createTaskRouter = () => {
    const router = Router();
    const controller = createTaskController();

    router.get('/', controller.getTasks);
    router.get('/:id', controller.getTask);
    router.post('/', controller.createTask);
    router.patch('/:id/status', controller.pathTaskStatus);
    router.delete('/:id', controller.deleteTask);

    return router;
};

export default createTaskRouter;