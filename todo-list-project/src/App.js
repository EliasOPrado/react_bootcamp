import {useState, useEffect} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos){
      setTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo){
    setTodos([todo, ...todos])
  }

  

  return (
    <div className="App">
    <header className="App-header">
     <p>React todo</p>
     <TodoForm addTodo={addTodo}/>
     <TodoList todos={todos}/>
     </header>
    </div>
    
  );
}

export default App;
