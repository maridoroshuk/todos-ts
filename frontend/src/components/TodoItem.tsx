import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice"
import { useActions } from "../hooks/useActions"
import { TodoText } from "./TodoText"

type Props = {
	todo: {
		_id: any,
		text: string,
		complete: boolean
	}
}


export const TodoItem: FC<Props> = ({ todo }) => {
	const [inputVisible, setInputVisible] = useState<boolean>(false)

	const { toggleTodo, deleteTodo} = useActions()

	const completeHandler = (): void => {
		toggleTodo({ id: todo._id, complete: !todo.complete })
	}

	const deleteHandler = (): void => {
		deleteTodo(todo._id)
	}

	return (
		<div id="todos" className="todos">
			<li className={todo.complete ? "completed" : "uncompleted"}>
				<button
					type="button"
					onClick={completeHandler}
					className={todo.complete ? "complete-btn" : "uncomplete-btn"}
				>
					{todo.complete ? <i className="fas fa-check" /> : null}
				</button>
				<TodoText
					onCompleteClick={completeHandler}
					inputVisible={inputVisible}
					todo={todo}
					setInputVisible={setInputVisible}
				/>
				<button type="button" onClick={() => setInputVisible(true)} className="edit-btn">
					<i className="fas fa-pencil-alt" />
				</button>
				<button type="button" onClick={deleteHandler} className="destroy-btn">
					<i className="fas fa-times" />
				</button>
			</li>
		</div>
	)
}
