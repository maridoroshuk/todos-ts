import React, { FC } from "react"
import ReactLoading from "react-loading"

export const Spinner: FC = () => {
	return (
		<div className="loader">
			<ReactLoading type="spokes" color="#eee" height="20%" width="30%" />
		</div>
	)
}
