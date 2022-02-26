import React, { useContext, useRef } from "react"
import {TodosContext} from "../store/context"
import styles from './NewTodo.module.css'


const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitTodoHandler = (e: React.FormEvent) => {
        e.preventDefault()

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText?.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText)
    }

    return <form className={styles.form} onSubmit={submitTodoHandler}>
        <label htmlFor='text'>Todo</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add todo</button>
    </form>

}

export default NewTodo