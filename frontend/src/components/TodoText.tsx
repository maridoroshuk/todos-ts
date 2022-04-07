import React, { FC, FormEvent, useEffect, useState } from "react"
import { useActions } from "../hooks/useActions"

type TextProps = {
  inputVisible: boolean
  todo: {}
  setInputVisible: (p: boolean) => void
  onCompleteClick: any
}

export const TodoText: FC<TextProps> = (props: TextProps) => {
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

  const editTextHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
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
