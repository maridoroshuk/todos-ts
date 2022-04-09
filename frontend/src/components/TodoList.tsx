import React, { FC, useEffect } from "react"
import { Spinner } from "./Spinner"
import { TodoItem } from "./TodoItem"
import { Form } from "./Form"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ITodoItem } from "../types/todo"
import { useDispatch } from "react-redux"
import { getTodos, reset } from "../store/action-creator/todo"

export const TodoList: FC = () => {
	const {
		todoList, isLoading, isError, message
	} = useTypedSelector(
		(state) => state.todo
	)

	console.log(todoList)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodos())
		if (isError) {
			console.log(message)
		}
		return () => {
			dispatch(reset())
			
		}
	}, [isError, message])

	const statusHandler = (event: React.ChangeEvent<HTMLParagraphElement>) => {
		const status = event.target.innerText 
		if (status === "completed") {
			dispatch({ type: "GET_TODOS", payload: { complete: true }})
		} else if (status === "uncompleted") {
			dispatch({ type: "GET_TODOS", payload: { complete: false }})
		} else if (status === "all") {
			dispatch({ type: "GET_TODOS"})
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
								<TodoItem key={todo._id} todo={todo}/>
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
