import React, { FC, MouseEventHandler, useEffect } from "react"
import { Spinner } from "./Spinner"
import { TodoItem } from "./TodoItem"
import { Form } from "./Form"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ITodoItem } from "../types/todo"
import { useActions } from "../hooks/useActions"

export const TodoList: FC = () => {
	const {
		todoList, isLoading, isError, message
	} = useTypedSelector(
		(state) => state.todo
	)




	const { getTodo, reset } = useActions()


	useEffect(() => {
		getTodo()
		if (isError) {
			console.log(message)
		}
		return () => {
		reset()
		}
	}, [isError, message])

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
								<p onClick={() => getTodo()} id="filter-todo-all">
									all
								</p>
								<p onClick={() => getTodo({ complete: true })} id="filter-todo-completed">
									completed
								</p>
								<p onClick={() => getTodo({ complete: false })} id="filter-todo-uncompleted">
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
