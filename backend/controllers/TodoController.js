const asyncHandler = require("express-async-handler")

const Todo = require("../models/todoModel")

// @desc    Get todo
// @route   GET /api/todo
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
	let todos
	if (req.query && req.query?.complete) {
		todos = await Todo.find({ complete: req.query.complete })
	} else {
		todos = await Todo.find()
	}

	res.status(200).json(todos)
})

// @desc    Set todo
// @route   POST /api/todo
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error("Please add a text field")
	}

	const todo = await Todo.create({
		text: req.body.text
	})

	res.status(200).json(todo)
})

// @desc    Update todo
// @route   PUT /api/todo/:id
// @access  Public
const updateTodo = asyncHandler(async (req, res) => {
	const todo = await Todo.findById(req.params.id)
	if (!todo) {
		res.status(400)
		throw new Error("Todo not found")
	}
	const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})

	res.status(200).json(updatedTodo)
})

// @desc    Delete todo
// @route   DELETE /api/todo/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
	const todo = await Todo.findById(req.params.id)
	if (!todo) {
		res.status(400)
		throw new Error("Todo not found")
	}

	const deletedTodo = await todo.remove()

	res.status(200).json(deletedTodo)
})

module.exports = {
	getTodo,
	setTodo,
	updateTodo,
	deleteTodo
}
