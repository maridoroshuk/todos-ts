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
    CREATE_TODO = "CREATE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    DELETE_TODO = "DELETE_TODO",
    EDIT_TODO = "EDIT_TODO",
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
interface CreateTodoAction {
    type: TodoActionTypes.CREATE_TODO
    payload: {
        text: string
        complete: boolean
    }
}
interface ToggleTodoAction {
    type: TodoActionTypes.TOGGLE_TODO
    payload: {
        id: any
        text: string
        complete: boolean
    }
}
interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_TODO
    payload: {
        id: any
        text: string
        complete: boolean
    }
}
interface EditTodoAction {
    type: TodoActionTypes.EDIT_TODO
    payload: {
        id: any
        text: string
        complete: boolean
    }
}
interface ResetTodos {
    type: TodoActionTypes.RESET_TODOS
    payload: string
}

export type TodoAction = GetTodosAction
    | GetTodosSuccessAction
    | GetTodosErrorAction
    | CreateTodoAction
    | ToggleTodoAction
    | DeleteTodoAction
    | EditTodoAction
    | ResetTodos