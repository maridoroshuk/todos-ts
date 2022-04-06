import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import { App } from "./App.tsx"
import { store } from "./store/index.ts"

ReactDOM.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
