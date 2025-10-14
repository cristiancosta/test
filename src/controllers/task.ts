import type { Request, Response } from "express";

import type { Task, TaskController } from "../types/task";

const createTaskController = (): TaskController => {

    const getTasks = (req: Request, res: Response) => {};
    const getTask = (req: Request, res: Response) => {};
    const createTask = (req: Request, res: Response) => {};
    const updateTask = (req: Request, res: Response) => {};
    const deleteTask = (req: Request, res: Response) => {};

    return {
        getTasks,
        getTask,
        createTask,
        pathTaskStatus: updateTask,
        deleteTask,
    };
};

export default createTaskController;
