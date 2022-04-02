import axios from "axios"

const API_URL = "/api/todo/"

// Create new todo
const createTodo = async (data) => {
  const response = await axios.post(API_URL, data)

  return response.data
}

// Get user todo
const getTodo = async (data) => {
  let getTodosUrl
  if (data.complete === undefined) {
    getTodosUrl = API_URL
  } else {
     getTodosUrl = `${API_URL}?complete=${data.complete}`
  }
  const response = await axios.get(getTodosUrl)

  return response.data
}

// Delete user todo
const deleteTodo = async (todoId) => {
  const response = await axios.delete(API_URL + todoId)

  return response.data
}

// Update user todo
const updateTodo = async (todoId, data) => {
  const response = await axios.put(API_URL + todoId, data)

  return response.data
}

export const todoService = {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo
}
