import { todoService } from './../servies/todo';
import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"
import { text } from 'stream/consumers';

interface Data {
        id?: any
        text?: string,
        complete?: boolean
}

export const getTodos = (data?: Data) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.GET_TODOS })
            const response = await todoService.getTodo(data.complete)
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            dispatch({
                type: TodoActionTypes.GET_TODOS_ERROR,
                payload: "Cannot fetch the todos. Please try again later"
            })
        }
    }
}

export const createTodo = (data: Data) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.CREATE_TODO, payload: data })
            const response = await todoService.createTodo(data)
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const toggleTodo = (data: Data) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.TOGGLE_TODO, payload: data.id })
            const response = await todoService.updateTodo(data.id, {complete: data.complete})
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteTodo = (data: Data) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.DELETE_TODO, payload: data.id })
            const response = await todoService.deleteTodo(data.id)
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const editTodo = (data: Data) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.EDIT_TODO, payload: data.id })
            const response = await todoService.updateTodo(data.id, {text: data.text})
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            console.log(err)
        }
    }
}



export const reset = () => {
    return{ type: TodoActionTypes.RESET_TODOS}
}