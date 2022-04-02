import React, { FC } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TodoList } from "./components/TodoList"

export const App: FC = () => {
	return (
		<>
			<Router>
				<div className="App">
					<header>
						<h1>todos</h1>
					</header>
					<div className="container">
						<Routes>
							<Route path="/" element={<TodoList />} />
						</Routes>
					</div>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}
