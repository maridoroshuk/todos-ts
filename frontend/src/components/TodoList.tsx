import React, { FC, useEffect } from "react"
import { Spinner } from "./Spinner"
import { TodoItem } from "./TodoItem"
import { Form } from "./Form"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ITodoItem } from "../types/todo"
import { useActions } from "../hooks/useActions"
import { useDispatch } from "react-redux"
import { getTodo, reset } from "../store/action-creator/todo"

export const TodoList: FC = () => {
	const {
		todoList, isLoading, isError, message
	} = useTypedSelector(
		(state) => state.todo
	)

	// const { getTodo, reset } = useActions()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodo())
		if (isError) {
			console.log(message)
		}
		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])


	const statusHandler = (event: React.ChangeEvent<HTMLParagraphElement>) => {
		const status = event.target.innerText
		if (status === "completed") {
			getTodo({ complete: true })
		} else if (status === "uncompleted") {
			getTodo({ complete: false })
		} else if (status === "all") {
			getTodo()
		}
	}

	return (
		<>
			<Form />
			{isLoading ? (
				<Spinner />
			) : (
				<section className="section">
					{todoList.length > 0 ? (
						<div className="todos">
							{todoList.map((todo: ITodoItem) => (
								<TodoItem key={todo._id} todo={todo} />
							))}
							<div className="filter-todo">
								<p onClick={() => statusHandler} id="filter-todo-all">
									all
								</p>
								<p onClick={() => statusHandler} id="filter-todo-completed">
									completed
								</p>
								<p onClick={() => statusHandler} id="filter-todo-uncompleted">
									uncompleted
								</p>
							</div>
						</div>
					) : (
						<h3 className="empty-todo">You have not set any todo</h3>
					)}
				</section>
			)}
		</>
	)
}
