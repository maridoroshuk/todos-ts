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

export const getTodos = (payload?: GetTodos) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "GET_TODOS", payload: {} })
            let response
            if (payload) {
                console.log(payload)
                response = await todoService.getTodo((<any>payload).complete)
            }
            response = await todoService.getTodo()
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
            dispatch({ type: "GET_TODOS_SUCCESS", payload: response })
        } catch (err) {
            console.log(err)
        }
    }
}

export const toggleTodo = (payload: ToggleTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            console.log(payload)
            dispatch({ type: "TOGGLE_TODO", payload: payload.id })
            const response = await todoService.updateTodo(payload.id, { complete: payload.complete })
            dispatch({ type: "GET_TODOS_SUCCESS", payload: response })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteTodo = (payload: DeleteTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "DELETE_TODO", payload: payload.id })
            const response = await todoService.deleteTodo(payload.id)
            dispatch({ type: "GET_TODOS_SUCCESS", payload: response })
        } catch (err) {
            console.log(err)
        }
    }
}

export const editTodo = (payload: EditTodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: "EDIT_TODO", payload: payload.id })
            const response = await todoService.updateTodo(payload.id, { text: payload.text })
            dispatch({ type: "GET_TODOS_SUCCESS", payload: response })
        } catch (err) {
            console.log(err)
        }
    }
}



export const reset = () => {
    return { type: "RESET_TODOS" }
}