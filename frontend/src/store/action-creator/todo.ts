import { todoService } from './../servies/todo';
import { Dispatch } from "react"
import { TodoAction } from "../../types/todo"


type GetTodos = {
    complete: boolean
}
type CreateTodo = {
    text: string
    complete: boolean
}
type ToggleTodo = {
    id: any
    complete: boolean
}
type DeleteTodo = {
    id: any
}
type EditTodo = {
    id: any
    text: string
}

export const getTodo = (data?: GetTodos) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "GET_TODOS", payload: {} })
            let response
            if (data) {
                response = await todoService.getTodo((<any>data).complete)
            }
            response = await todoService.getTodo()
            console.log(response)
            dispatch({ type: "GET_TODOS_SUCCESS", payload: response })
        } catch (err) {
            dispatch({
                type: "GET_TODOS_ERROR",
                payload: { error: "Cannot fetch the todos. Please try again later" }
            })
        }
    }
}

export const createTodo = (payload: CreateTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "CREATE_TODO", payload: payload })
            const response = await todoService.createTodo(payload)
            dispatch({ type: "CREATE_TODO_SUCCESS", payload: response })
        } catch (err) {
            dispatch({
                type: "CREATE_TODO_ERROR",
                payload: { error: "Cannot create todo. Please try again later" }
            })
        }
    }
}

export const toggleTodo = (payload: ToggleTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            console.log(payload)
            const response = await todoService.updateTodo(payload.id, { complete: payload.complete })
            dispatch({ type: "TOGGLE_TODO_SUCCESS", payload: response })
            console.log(response)
        } catch (err) {
            dispatch({
                type: "TOGGLE_TODO_ERROR",
                payload: { error: `${err}` }
            })
        }
    }
}

export const deleteTodo = (payload: DeleteTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "DELETE_TODO", payload: payload.id })
            const response = await todoService.deleteTodo(payload.id)
            dispatch({ type: "DELETE_TODO_SUCCESS", payload: response })
        } catch (err) {
            dispatch({
                type: "DELETE_TODO_ERROR",
                payload: { error: `${err}` }
            })
        }
    }
}

export const editTodo = (payload: EditTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "EDIT_TODO", payload: payload.id })
            const response = await todoService.updateTodo(payload.id, { text: payload.text })
            dispatch({ type: "EDIT_TODO_SUCCESS", payload: response })
        } catch (err) {
            dispatch({
                type: "EDIT_TODO_ERROR",
                payload: { error: `${err}` }
            })
        }
    }
}



export const reset = () => {
    return { type: "RESET_TODOS" }
}