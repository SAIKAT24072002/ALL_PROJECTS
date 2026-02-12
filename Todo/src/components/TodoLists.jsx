function TodoLists({ todo, setTodo }) {
  const deleteTodohandler = (id) => {
    const updatedTodo = todo.filter((todoId) => todoId.id !== id);
    setTodo(updatedTodo);
  };

  const toggleCheckBoxHandler = (id) => {
    const updatedTodo = todo.map((todoItem) =>
      todoItem.id === id
        ? { ...todoItem, completed: !todoItem.completed }
        : todoItem
    );
    setTodo(updatedTodo);
  };
  return (
    <>
      <div>
        {todo &&
          todo.map((item) => (
            <div
              key={item.id}
              className="flex mt-4 justify-between items-center border border-gray-200  p-2 rounded-xl hover:bg-gray-300 hover:text-white transition-colors ease-in-out delay-150 duration-300"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleCheckBoxHandler(item.id)}
              />
              <span
                className={`${
                  item.completed ? "strickThrough" : ""
                } text-xl font-semibold`}
              >
                {item.text}
              </span>
              <button
                onClick={() => deleteTodohandler(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors ease-in-out delay-150 duration-300"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default TodoLists;
