import React, {useEffect, useState} from 'react'
import {todoListApi} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListApi.getTodoList()
            .then(response => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todoName = 'React&Redux'
        todoListApi.createTodoList(todoName)
            .then(response => {
                setState(response.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = 'bfd92c18-b1bc-499b-8ad3-c96a260e3789'
        todoListApi.deleteTodoList(todoID)
            .then(response => {
                    setState(response.data)
                }
            )
            .catch(() => {
                console.log('err')
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = 'd287a416-9f84-44dd-9695-974f556f9da2'
        let todoName = 'React$CSS'
        todoListApi.updateTodoList(id, todoName)
            .then(response => {
                setState(response.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasksForTodo = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todoID = '6d2855ca-029a-4f2f-bee8-b9d62f7d7a83'
        todoListApi.getTasks(todoID)
            .then(response => {
                setState(response.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todoID = '6d2855ca-029a-4f2f-bee8-b9d62f7d7a83'
        const title = 'absolutely new task'
        todoListApi.createTasks(todoID,title)
            .then(response => {
                console.log(response)
                setState(response.data.data.item.title)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(()=>{
        const todoID = '6d2855ca-029a-4f2f-bee8-b9d62f7d7a83'
        const taskID = '532ec6c9-4a80-4e8d-af81-6df66d3ae92f'
        const title = 'new taskkkkkkkkkkkksqsqssq'

        todoListApi.updateTasks(todoID,taskID,title)
            .then(response=>{
                setState(response.data)
            })
    },[])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    useEffect(()=>{
        const todoID = '6d2855ca-029a-4f2f-bee8-b9d62f7d7a83'
        const taskID = 'd82741b5-9f32-4bec-b64a-4abf31d4ee17'

        todoListApi.deleteTasks(todoID,taskID)
            .then(response=>{
                setState(response)
            })
    },[])

    const [state, setState] = useState<any>(null)

    return <div>{JSON.stringify(state)}</div>

}