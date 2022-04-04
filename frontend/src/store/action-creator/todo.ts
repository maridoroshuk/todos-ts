import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"

export const getTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.GET_TODOS })
            const response = await axios.get("")
            dispatch({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data })
        } catch (err) {
            dispatch({
                type: TodoActionTypes.GET_TODOS_ERROR,
                payload: "Cannot fetch the todos. Please try again later"
            })
        }
    }
}

export const reset = () => {
    return{ type: TodoActionTypes.RESET_TODOS}
}