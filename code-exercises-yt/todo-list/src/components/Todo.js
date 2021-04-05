import React from "react";

function Todo({ todo }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li
        style={{
          
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
}

export default Todo;
