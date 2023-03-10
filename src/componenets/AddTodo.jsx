import React, { useState } from "react";
import Todo from "./Todo";

let nextId = 0;

function AddTodo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAdd = () => {
    if (todo === "") return;
    setTodo("");
    setTodoList([
      ...todoList,
      {
        id: nextId++,
        todo: todo,
      },
    ]);
  };
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };
  return (
    <main className="p-2">
      <div className="flex items-center my-2 gap-2 ">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add Todo"
          className="p-1 border-2 border-[#00d4ff] bg-[#790931] text-white focus:outline-none"
        ></input>
        <button className="" onClick={handleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8 fill-[#00d4ff]"
          >
            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
          </svg>
        </button>
      </div>
      <ul className="space-y-2">
        {todoList.length > 0 &&
          todoList.map((todoItem) => (
            <Todo key={todoItem.id} todo={todoItem} removeTodo={removeTodo} />
          ))}
      </ul>
    </main>
  );
}

export default AddTodo;
