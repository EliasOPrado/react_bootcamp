import React, {useState, useEffect} from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
      })
    )
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
