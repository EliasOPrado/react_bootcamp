import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {
  
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e){
      e.preventDefault();
      if(todo.task.trim()){
          addTodo({...todo,id:uuidv4()});
          //reset task input
          setTodo({...todo, task:''});
      }
  }
  return (
    <form aonSubmit={handleSubmit}>
      <input
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
