import React, { FC, FormEvent, useEffect, useState } from "react"
import { useActions } from "../hooks/useActions"

interface TextProps {
  inputVisible: boolean
  todo: string[]
  setInputVisible: (p: boolean) => void
  onCompleteClick: () => void
}

export const TodoText: FC = (props: TextProps) => {
  const { inputVisible, todo, setInputVisible, onCompleteClick } = props
  const [textInput, setTextInput] = useState<string>(todo.text)
  
  const { editTodo } = useActions()

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

  const editTextHandle = (event: FormEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }

  const submitEditTextHandler = (event: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    editTodo({ id: todo._id, text: textInput })
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
