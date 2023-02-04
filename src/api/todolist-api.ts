import React from 'react'
import axios from "axios";

// --------------------------------------------------- todos type

export type GetTodoListType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

type CreateTodoListType = {
    resultCode: number
    messages: string[],
    data: {
        item: GetTodoListType
    }
}

export type DeleteTodoListType = {
    resultCode: number
    messages: string[],
    data: {}
}

export type UpdateTodoListType = {
    data: {}
    fieldsErrors?: []
    messages: string[]
    resultCode: number
}

// --------------------------------------------------- tasks type

export type GetTaskResponseType = {
    items: TaskType[];
    totalCount: number;
    error?: any;
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft =3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type TaskType = {
    id: string;
    title: string;
    description?: any;
    todoListId: string;
    order: number;
    status: TaskStatuses;
    priority: TaskPriorities;
    startDate?: any;
    deadline?: any;
    addedDate: string;
}

export type CreateTasksType = {
    data: {
        item: TaskType
    }
    fieldsErrors: []
    messages: string[]
    resultCode: number
}

export type UpdateTasksType = {
    item: TaskType
    fieldsErrors: []
    messages: string[]
    resultCode: number
}

export type DeleteTasksType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '7927a783-5afd-4ad3-9f9c-1cf089c72577'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '7927a783-5afd-4ad3-9f9c-1cf089c72577'
    }
})

export const todoListApi = {
    getTodoList() {
        return instance.get<GetTodoListType[]>('todo-lists')
    },
    createTodoList(title: string) {
        return instance.post<CreateTodoListType>('todo-lists', {title})
        //CreateTodoListType типизация респонса
    },
    deleteTodoList(id: string) {
        return instance.delete<DeleteTodoListType>(`todo-lists/${id}`)
    },
    updateTodoList(id: string, title: string) {
        return instance.put<UpdateTodoListType>(`todo-lists/${id}`, {title})
    },

    // -------------------------------------------------tasks

    getTasks(todoID: string) {
        return instance.get<GetTaskResponseType>(`todo-lists/${todoID}/tasks`)
    },
    createTasks(todoID: string, title: string) {
        return instance.post<CreateTasksType>(`todo-lists/${todoID}/tasks`, {title})
    },
    updateTasks(todoID: string, taskID: string, title: string) {
        return instance.put<UpdateTasksType>(`todo-lists/${todoID}/tasks/${taskID}`, {title})
    },
    deleteTasks(todoID: string, taskID: string) {
        return instance.delete<DeleteTasksType>(`todo-lists/${todoID}/tasks/${taskID}`)
    }

}

