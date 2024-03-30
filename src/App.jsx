import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList/TaskList";

// get todo items from localStorage
const getLocalTodoList = () => {
  const stringifyTodoList = localStorage.getItem("myTodoList");
  const parsedTodoList = JSON.parse(stringifyTodoList);

  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
};

function App() {
  const [searchIput, setSearchInput] = useState("");
  const [todoList, setTodoList] = useState(getLocalTodoList());

  // add todo items
  const onAddTask = () => {
    {
      if (!searchIput) {
        alert("Please Enter Input");
      } else {
        let newTodo = {
          id: uuidv4(),
          title: searchIput,
        };
        setTodoList([...todoList, newTodo]);
        setSearchInput("");
      }
    }
  };

  // delete todo items
  let deleteItem = (id) => {
    let filteredTodo = todoList.filter((each) => each.id !== id);
    setTodoList(filteredTodo);
  };

  // storing todo items in localStorage
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="main-container">
      <h1 className="text-center mt-5 mb-5">Todo List </h1>
      <input
        className="form-control"
        onChange={(event) => setSearchInput(event.target.value)}
        value={searchIput}
      />
      <button className="btn btn-dark mt-3 mb-3" onClick={onAddTask}>
        Add Button
      </button>
      <h2 className="mb-4">My Tasks</h2>

      <ul className="todo-container">
        {/* iternating all todo items */}
        {todoList.map((eachItem) => (
          <TaskList
            taskDetails={eachItem}
            key={eachItem.id}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
