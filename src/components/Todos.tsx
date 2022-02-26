import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import {TodosContext } from '../store/context'

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)
  return (
    <ul className={styles.styles}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
