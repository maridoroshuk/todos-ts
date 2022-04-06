import { ITodoItem } from './../../types/todo';
import { todoService } from './../servies/todo';
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"



export const getTodos = (data?: ITodoItem) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: TodoActionTypes.GET_TODOS })
            let response
            if (data) {
                response = await todoService.getTodo((<any>data).complete)
            }
            response = await todoService.getTodo()
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            dispatch({
                type: TodoActionTypes.GET_TODOS_ERROR,
                payload: "Cannot fetch the todos. Please try again later"
            })
        }
    }
}

export const createTodo = (data: ITodoItem) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: TodoActionTypes.CREATE_TODO, payload: data })
            const response = await todoService.createTodo(data)
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const toggleTodo = (data: ITodoItem) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: TodoActionTypes.TOGGLE_TODO, payload: data.id })
            const response = await todoService.updateTodo(data.id, { complete: data.complete })
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteTodo = (data: ITodoItem) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: TodoActionTypes.DELETE_TODO, payload: data.id })
            const response = await todoService.deleteTodo(data.id)
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const editTodo = (data: ITodoItem) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        try {
            dispatch({ type: TodoActionTypes.EDIT_TODO, payload: data.id })
            const response = await todoService.updateTodo(data.id, { text: data.text })
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}



export const reset = () => {
    return { type: TodoActionTypes.RESET_TODOS }
}