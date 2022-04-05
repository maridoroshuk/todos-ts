import React, { FC } from "react"
import ReactLoading from "react-loading"

interface LoadingFix extends React.Component {}

const Loaded = (ReactLoading as any) as {
	new(): LoadingFix
}

const props: any = {
	type: "spokes",
	color: "#eee",
	height: "20%",
	width: "30%"
}

export const Spinner: FC = () => {
	return (
		<div className="loader">
			<Loaded/>
		</div>
	)
}
