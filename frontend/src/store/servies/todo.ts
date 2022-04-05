import axios from "axios"

const API_URL = "/api/todo/"

interface Data {
    data: any
    todoId: any
}
// Create new todo
const createTodo = async (data: Data) => {
  const response = await axios.post(API_URL, data)

  return response.data
}

// Get user todo
const getTodo = async (data: Data) => {
  let getTodosUrl
  if (data === undefined) {
    getTodosUrl = API_URL
  } else {
     getTodosUrl = `${API_URL}?complete=${data}`
  }
  const response = await axios.get(getTodosUrl)

  return response.data
}

// Delete user todo
const deleteTodo = async (todoId: Data) => {
  const response = await axios.delete(API_URL + todoId)

  return response.data
}

// Update user todo
const updateTodo = async (todoId: Data, data: Data) => {
  const response = await axios.put(API_URL + todoId, data)

  return response.data
}

export const todoService = {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo
}
