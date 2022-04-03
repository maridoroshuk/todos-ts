export interface ITodo {
	_id: string
	text: string
	complete: boolean
}

export interface TodoProps {
	todo: ITodo
}

export type ApiDataType = {
	message: string
	status: string
	response: ITodo[]
	data?: ITodo
}
