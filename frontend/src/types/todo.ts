export interface TodoState {
    todoList: any[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}


export interface ITodoItem {
    id?: any
    text: string
    complete: boolean

}

//Generic for actions
export type Action<T extends string, P extends {}> = {
    type: T,
    payload: P
}


//Get todo type
type GetTodosAction = Action<"GET_TODOS", { complete?: boolean }>
type GetTodosSuccessAction = Action<"GET_TODOS_SUCCESS", { todos: any }>
type GetTodosErrorAction = Action<"GET_TODOS_ERROR", { error: string }>

//Create todo type
type CreateTodoAction = Action<"CREATE_TODO", {}>
type CreateTodoSuccessAction = Action<"CREATE_TODO_SUCCESS", {
    todoItem: {
        text: string
        complete: boolean
    }
}>
type CreateTodoErrorAction = Action<"CREATE_TODO_ERROR", { error: string }>

//Toggle todo type
type ToggleTodoAction = Action<"TOGGLE_TODO", {}>
type ToggleTodoSuccessAction = Action<"TOGGLE_TODO_SUCCESS", {
    id: any
    text: string
    complete: boolean
}>
type ToggleTodoErrorAction = Action<"TOGGLE_TODO_ERROR", { error: string }>


//Delete todo type
type DeleteTodoAction = Action<"DELETE_TODO", {}>
type DeleteTodoSuccessAction = Action<"DELETE_TODO_SUCCESS", {
    id: any
    text: string
    complete: boolean
}>
type DeleteTodoErrorAction = Action<"DELETE_TODO_ERROR", { error: string }>

//Edit todo type
type EditTodoAction = Action<"EDIT_TODO", {}>
type EditTodoSuccessAction = Action<"EDIT_TODO_SUCCESS", {
    id: any
    text: string
    complete: boolean
}>
type EditTodoErrorAction = Action<"EDIT_TODO_ERROR", { error: string }>


//Reset todo type
type ResetTodosAction = Action<"RESET_TODOS", {
    id: any
    text: string
    complete: boolean
}>

export type TodoAction = GetTodosAction
    | GetTodosSuccessAction
    | GetTodosErrorAction
    | CreateTodoAction
    | CreateTodoSuccessAction
    | CreateTodoErrorAction
    | ToggleTodoAction
    | ToggleTodoSuccessAction
    | ToggleTodoErrorAction
    | DeleteTodoAction
    | DeleteTodoSuccessAction
    | DeleteTodoErrorAction
    | EditTodoAction
    | EditTodoSuccessAction
    | EditTodoErrorAction
    | ResetTodosAction
