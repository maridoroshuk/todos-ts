import axios from "axios"
import { ITodoItem } from "../../types/todo"

const API_URL = "/api/todo/"


// Create new todo
const createTodo = async (data: ITodoItem) => {
  const response = await axios.post(API_URL, data)

  return response.data
}

// Get user todo
const getTodo = async (data?: { complete: boolean }) => {
  let getTodosUrl
  if (data) {
    getTodosUrl = `${API_URL}?complete=${data.complete}`
  } else {
    getTodosUrl = API_URL

  }


  const response = await axios.get<ITodoItem[]>(getTodosUrl)
  return response.data
}

// Delete user todo
const deleteTodo = async (todoId: ITodoItem) => {
  const response = await axios.delete(API_URL + todoId)

  return response.data
}

// Update user todo
const updateTodo = async (todoId: any, data: { complete?: boolean, text?: string }) => {
  const response = await axios.put(API_URL + todoId, data)
  return response.data
}

export const todoService = {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo
}
