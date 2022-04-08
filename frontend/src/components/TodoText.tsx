import React, { FC, FormEvent, useEffect, useState } from "react"
import { useActions } from "../hooks/useActions"

type TextProps = {
  inputVisible: boolean
  todo: {
    _id: any,
    text: string,
    complete: boolean
  }
  setInputVisible: (p: boolean) => void
  onCompleteClick: any
}

export const TodoText: FC<TextProps> = (props: TextProps) => {
  const { inputVisible, todo, setInputVisible, onCompleteClick } = props
  const [textInput, setTextInput] = useState<string>(todo.text)

  const { editTodo } = useActions()

  const editTextHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextInput(event.target.value)
  }

  const submitEditTextHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
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
        <span role="button" onClick={onCompleteClick} className="todo-item">
          {todo.text}
        </span>
      )}
    </div>
  )
}
