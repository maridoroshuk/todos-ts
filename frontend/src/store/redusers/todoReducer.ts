import { createAsyncThunk } from "@reduxjs/toolkit"
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

// Create new todo
export const createTodo = createAsyncThunk(
  "todo/create",
  async (data, thunkAPI) => {
    try {
      return await todoService.createTodo(data)
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user todo
export const getTodo = createAsyncThunk(
  "todo/getAll",
  async (data, thunkAPI) => {
    try {
      // console.log(data);
      return await todoService.getTodo({ complete: data?.complete })
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete todo
export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (id, thunkAPI) => {
    try {
      return await todoService.deleteTodo(id)
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Toggle todo
export const toggleTodo = createAsyncThunk(
  "todo/complete",
  async (data, thunkAPI) => {
    try {
      return await todoService.updateTodo(data.id, {
        complete: data.complete
      })
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Edit todo
export const editTodo = createAsyncThunk(
  "todo/update",
  async (data, thunkAPI) => {
    try {
      return await todoService.updateTodo(data.id, { text: data.text })
    } catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

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
    case TodoActionTypes.CREATE_TODO:
      return { ...state, isLoading: false, isSuccess: true, todoList: state.todoList.concat(action.payload) }
    case TodoActionTypes.TOGGLE_TODO:
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.map((todo) => {
          if (todo._id === action.payload.id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
        })
      }
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.filter(
          (todo) => todo._id !== action.payload.id
        )
      }
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.map((todo) => {
          if (todo._id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text
            }
          }
          return todo
        })
      }
    case TodoActionTypes.RESET_TODOS:
      return { ...state, todoList: state.todoList }
    default:
      return state
  }
}