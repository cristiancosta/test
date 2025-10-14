import type { Request, Response } from "express";

export type TaskController = {
    getTasks: (req: Request, res: Response) => void;
    getTask: (req: Request, res: Response) => void;
    createTask: (req: Request, res: Response) => void;
    pathTaskStatus: (req: Request, res: Response) => void;
    deleteTask: (req: Request, res: Response) => void;
};

export type TaskService = {
    getTasks: () => Task[];
    getTask: (id: string) => Task;
    createTask: (dto: CreateTaskDto) => Task;
    updateTaskStatus: (id: string, dto: UpdateTaskStatusDto) => Task;
    deleteTask: (id: string) => void;
};

export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
};

export type CreateTaskDto = {
    title: string;
    description?: string;
};

export type UpdateTaskStatusDto = {
    status: TaskStatus;
};
