import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDone } from "../store/slices/DoneSlice";
import { deleteTodo, setTodos } from "../store/slices/ToDoSlice";
import { addPoint } from "../store/slices/PointsSlice";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://68916c9b447ff4f11fbc8524.mockapi.io/todo/Commenta")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        dispatch(setTodos(data));
        localStorage.setItem("todo", JSON.stringify(data));
      });
  }, []);

  const handleDone = (item) => {
    dispatch(addDone(item));
    dispatch(deleteTodo(item.id));
    dispatch(addPoint());
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.comment}</p>
          <button onClick={() => handleDone(todo)}> Done</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
