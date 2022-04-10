import React from "react"
import { ITodoItem, TodoAction, TodoState } from "../../types/todo"



const initialState: TodoState = {
  todoList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

export const todoReducer = (state = initialState, { type, payload }: TodoAction): TodoState => {
  switch (type) {
    case "GET_TODOS":
      return { ...state, isLoading: true }
    case "GET_TODOS_SUCCESS":
      return { ...state, isLoading: false, isSuccess: true, todoList: payload }
    case "GET_TODOS_ERROR":
      return { ...state, isLoading: false, isError: true, message: payload.error }
    case "CREATE_TODO":
      return { ...state, isLoading: false }
    case "CREATE_TODO_SUCCESS":
      return { ...state, isLoading: false, isSuccess: true, todoList: state.todoList.push(payload.todoItem)}
    case "CREATE_TODO_ERROR":
      return { ...state, isLoading: false, isError: true, message: payload.error }
    case "TOGGLE_TODO":
      return { ...state, isLoading: true }
    case "TOGGLE_TODO_SUCCESS":
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.map((todo: ITodoItem) => {
          if (todo._id === payload.id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo
        })
      }
    case "TOGGLE_TODO_ERROR":
      return { ...state, isLoading: false, isError: true, message: payload.error }
    case "DELETE_TODO":
      return { ...state, isLoading: true }
    case "DELETE_TODO_SUCCESS":
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.filter(
          (todo: ITodoItem) => todo._id !== payload.id
        )
      }
    case "DELETE_TODO_ERROR":
      return { ...state, isLoading: false, isError: true, message: payload.error }
    case "EDIT_TODO":
      return { ...state, isLoading: true }
    case "EDIT_TODO_SUCCESS":
      return {
        ...state, isLoading: false, isSuccess: true, todoList: state.todoList.map((todo: ITodoItem) => {
          if (todo._id === payload.id) {
            return {
              ...todo,
              text: payload.text
            }
          }
          return todo
        })
      }
    case "EDIT_TODO_ERROR":
      return { ...state, isLoading: false, isError: true, message: payload.error }
    case "RESET_TODOS":
      return { ...state, todoList: state.todoList }
    default:
      return state
  }
}