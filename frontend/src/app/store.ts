import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { todoSlice } from "../features/todos/todoSlice"

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
