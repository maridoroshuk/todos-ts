import React, { ChangeEvent, FC, useState } from "react"
import { useDispatch } from "react-redux"
import { createTodo } from "../features/todos/todoSlice"

export const Form: FC = () => {
	const [text, setText] = useState<string>("")

	const dispatch = useDispatch()

	const onSubmit = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()

		dispatch(createTodo({ text, completed: false }))
		setText("")
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setText(e.target.value)
	}

	return (
		<form id="form" htmlFor="" onSubmit={onSubmit}>
			<input
				onChange={handleInputChange}
				value={text}
				id="input"
				className="input"
				placeholder="What needs to be done?"
				type="text"
			/>
		</form>
	)
}
