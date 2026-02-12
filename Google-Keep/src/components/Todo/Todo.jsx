import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputText, setInputText] = useState("");

  const [todo, setTodo] = useState([]);

  console.log(todo);

  const addTodoHandler = () => {
    if (!inputText.trim()) return;
    const todoItems = {
      id: Date.now(),
      text: inputText,
    };
    setTodo((prevTodo) => [...prevTodo, todoItems]);
    setInputText("");
  };
  return (
    <div className="mainContainer">
      <h1 className="header">TODO</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>

      {todo?.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
