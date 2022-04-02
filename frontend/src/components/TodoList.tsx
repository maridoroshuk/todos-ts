import React, { FC, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Spinner } from "./Spinner"
import { TodoItem } from "./TodoItem"
import { Form } from "./Form"
import { getTodo, reset } from "../features/todos/todoSlice"

export const TodoList: FC = () => {
	const dispatch = useDispatch()

	const {
 todoList, isLoading, isError, message
} = useSelector(
		(state) => state.todos
	)

	useEffect(() => {
		dispatch(getTodo())
		if (isError) {
			console.log(message)
		}
		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	const statusHandler = (e) => {
		const status = e.target.innerText
		if (status === "completed") {
			dispatch(getTodo({ complete: true }))
		} else if (status === "uncompleted") {
			dispatch(getTodo({ complete: false }))
		} else if (status === "all") {
			dispatch(getTodo())
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
							{todoList.map((todo) => (
								<TodoItem key={todo._id} todo={todo} />
							))}
							<div className="filter-todo">
								<p onClick={statusHandler} id="filter-todo-all">
									all
								</p>
								<p onClick={statusHandler} id="filter-todo-completed">
									completed
								</p>
								<p onClick={statusHandler} id="filter-todo-uncompleted">
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
