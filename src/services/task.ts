import { v4 } from 'uuid';
import type { TaskService, Task, UpdateTaskStatusDto, CreateTaskDto } from "../types/task";
import { ExtendedError } from '../types/error';

let tasks: Task[] = [];

const createTaskService = (): TaskService => {

    const getTasks = () => {
        return tasks;
    };

    const getTask = (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) {
            const error = new ExtendedError(404);
            error.message = 'Task not found';
            throw error;
        }
        return task;
    };

    const createTask = (dto: CreateTaskDto) => {
        const { title, description } = dto;
        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            const error = new ExtendedError(400);
            error.message = 'Invalid task title';
            throw error;
        }
        const now = new Date().toISOString();

        const task: Task = {
            id: v4(),
            title: title.trim(),
            description: description ?? '',
            status: 'pending',
            createdAt: now,
            updatedAt: now,
        };
        tasks.push(task);
        return task;
    };

    const updateTaskStatus = (id: string, dto: UpdateTaskStatusDto) => {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) {
            const error = new ExtendedError(404);
            error.message = 'Task not found';
            throw error;
        }

        const existingTask = tasks[index];
        const updatedTask: Task = {
            ...existingTask,
            status: dto.status,
            updatedAt: new Date().toISOString(),
        };

        tasks[index] = updatedTask;

        return updatedTask;
    };

    const deleteTask = (id: string) => {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) {
            const error = new ExtendedError(404);
            error.message = 'Task not found';
            throw error;
        }

        tasks.splice(index, 1);
    };

    return {
        getTasks,
        getTask,
        createTask,
        updateTaskStatus,
        deleteTask,
    };
};

export default createTaskService;
