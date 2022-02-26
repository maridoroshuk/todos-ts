import React from "react";
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={styles.item} onClick={props.onRemoveTodo}>{props.text}</li>
    );
};

export default TodoItem;