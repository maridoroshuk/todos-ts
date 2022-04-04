export interface TodoState {
    todoList: any[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

export enum TodoActionTypes {
    GET_TODOS = "GET_TODOS",
    GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
    GET_TODOS_ERROR = "GET_TODOS_ERROR",
    RESET_TODOS = "RESET_TODOS"
}

interface GetTodosAction {
    type: TodoActionTypes.GET_TODOS
}
interface GetTodosSuccessAction {
    type: TodoActionTypes.GET_TODOS_SUCCESS
    payload: any[]
}
interface GetTodosErrorAction {
    type: TodoActionTypes.GET_TODOS_ERROR
    payload: string
}
interface ResetTodos {
    type: TodoActionTypes.RESET_TODOS
    payload: string
}

export type TodoAction = GetTodosAction | GetTodosSuccessAction | GetTodosErrorAction | ResetTodos