import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../store/action-creator/todo"
import { ITodoItem } from "../types/todo"
import { TodoText } from "./TodoText"

type Props = {
	todo: ITodoItem
}


export const TodoItem: FC<Props> = ({ todo }: Props) => {
	const [inputVisible, setInputVisible] = useState<boolean>(false)

	const dispatch = useDispatch()

	const completeHandler = (): void => {
		dispatch(toggleTodo({ id: todo._id, complete: !todo.complete }))
	}

	const deleteHandler = (): void => {
		dispatch(deleteTodo(todo._id))
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
					todo={todo}
					onCompleteClick={completeHandler}
					inputVisible={inputVisible}
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
