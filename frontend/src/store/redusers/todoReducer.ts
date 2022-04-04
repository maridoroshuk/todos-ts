import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

const initialState: TodoState = {
    todoList: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.GET_TODOS:
            return { ...state, isLoading: true }
        case TodoActionTypes.GET_TODOS_SUCCESS:
            return { ...state, isLoading: false, isSuccess: true, todoList: action.payload }
        case TodoActionTypes.GET_TODOS_ERROR:
            return { ...state, isLoading: false, isError: true, message: action.payload }
        case TodoActionTypes.RESET_TODOS:
            return { ...state, todoList: state.todoList }
        default:
            return state
    }
}