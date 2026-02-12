import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import TodoLists from "./TodoLists";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todoValues");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  function addTodoHandler() {
    if (inputValue.trim() === "") return;
    const todoProperty = {
      id: nanoid(),
      text: inputValue.trim(),
      completed: false,
    };
    setTodo((prev) => [...prev, todoProperty]);
    setInputValue("");
  }
  useEffect(() => {
    localStorage.setItem("todoValues", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div className="mx-auto max-w-md mt-10 shadow-2xl p-6 rounded-md">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Enter your Task here"
          className="w-64 px-4 py-3 rounded-md border border-gray-300"
        />
        <button
          onClick={addTodoHandler}
          className="px-6 py-3 bg-red-500 text-white font-bold ml-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
        >
          Add Todo
        </button>
        <TodoLists todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
}

export default Todo;
