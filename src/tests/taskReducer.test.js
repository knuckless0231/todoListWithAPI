import {TasksStateType} from "../App";
import {TaskPriorities, TaskStatuses} from "../api/todolist-api";
import {removeTaskAC, tasksReducer} from "../state/tasks-reducer";
// : TasksStateType
let startState = {
    'arr1': [{
        id: 't1',
        title: 'string',
        todoListId: 'string',
        order: 7,
        status: TaskStatuses.New,
        priority: TaskPriorities.Hi,
        addedDate: 'string',
        startDate: 'any',
        deadline: 'any',
        description: 'any',
    }]}

// beforeEach(() => {
//     startState = {
//         'arr1': [{
//             id: 't1',
//             title: 'string',
//             todoListId: 'string',
//             order: 7,
//             status: TaskStatuses.New,
//             priority: TaskPriorities.Hi,
//             addedDate: 'string',
//             startDate: 'any',
//             deadline: 'any',
//             description: 'any',
//         },
            // {
            //     id: 't2',
            //     title: 'some title',
            //     todoListId: 'string',
            //     order: 7,
            //     status: TaskStatuses.New,
            //     priority: TaskPriorities.Hi,
            //     addedDate: 'string',
            // },
//         ]
//     }
// })

test("correct task should be removed", () => {
    const endState = tasksReducer(startState, removeTaskAC('t1', 'arr1'));
    expect(endState['arr1'].length).toBe(0)
})

