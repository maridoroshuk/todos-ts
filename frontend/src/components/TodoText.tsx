import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo } from "../features/todos/todoSlice"

export const TodoText: FC = ({
  inputVisible, todo, setInputVisible, onCompleteClick
}) => {
  const [textInput, setTextInput] = useState<string>(todo.text)
  const dispatch = useDispatch()

  function onClickOutSide(e) {
    if (textInput && !textInput.contains(e.target)) {
      setInputVisible(false)
    }
  }

  useEffect(() => {
    // Handle outside clicks
    if (inputVisible) {
      document.addEventListener("mousedown", onClickOutSide)
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutSide)
    }
  })

  const editTextHandle = (e) => {
    setTextInput(e.target.value)
  }

  const submitEditTextHandler = (e) => {
    e.preventDefault()
    dispatch(editTodo({ id: todo._id, text: textInput }))
    setInputVisible(false)
  }
  return (
    <div>
      {inputVisible ? (
        <form onSubmit={submitEditTextHandler}>
          <input
            value={textInput}
            onChange={editTextHandle}
            className="input-todo"
          />
        </form>
      ) : (
        <span role="button" tabIndex="0" onClick={onCompleteClick} className="todo-item">
          {todo.text}
        </span>
      )}
    </div>
  )
}
