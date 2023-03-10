import React, { useState } from "react";

function Todo(props) {
  const { todo, removeTodo } = props;
  const [isCompleted, setisCompleted] = useState(false);

  return (
    <li
      className="flex gap-2 bg-[#00d4ff] p-2 cursor-pointer"
      onClick={() => {
        setisCompleted(!isCompleted);
      }}
    >
      <p className={isCompleted ? "w-4/5  line-through" : "w-4/5"}>
        {todo.todo}
      </p>
      <div className="flex justify-evenly w-1/5 h-full">
        <button
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default Todo;
