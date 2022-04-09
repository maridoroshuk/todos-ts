import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from "react"
import { useDispatch } from "react-redux"
import { createTodo } from "../store/action-creator/todo"

export const Form: FC = () => {
	const [text, setText] = useState<string>("")

	const dispatch = useDispatch()

	const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		dispatch(createTodo({ text, complete: false }))
		setText("")
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setText(e.target.value)
	}

	return (
		<form id="form"  onSubmit={onSubmit}>
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
