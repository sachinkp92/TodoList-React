import React from "react";
import "./style.css";

const TaskList = ({ taskDetails, deleteItem }) => {
  const { title, id } = taskDetails;

  // id pass in the deleteItem function
  const onDeleteTodo = () => {
    deleteItem(id);
  };

  return (
    <li className="p-3 mb-3 text-light">
      <span>{title}</span>
      <i className="fa-solid fa-trash delete-button" onClick={onDeleteTodo}></i>
    </li>
  );
};

export default TaskList;
