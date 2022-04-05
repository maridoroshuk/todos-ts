import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from "react"
import { useActions } from "../hooks/useActions"

export const Form: FC = () => {
	const [text, setText] = useState<string>("")

	const { createTodo } = useActions()

	const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		createTodo({ text, complete: false })
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
