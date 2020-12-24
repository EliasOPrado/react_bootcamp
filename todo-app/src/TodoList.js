import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            // gets all the state and add new todo
            // will be added as props in newTodoForm on handleSubmit
            todos:[...this.state.todos, newTodo]
        })
    }

    remove(id){
        this.setState({
            // will remove this id as it is unic not equal to the others
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos:updatedTodos})
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos:updatedTodos})
    }

    render(){
        const todos = this.state.todos.map(todo =>{
            return <Todo 
            key={todo.id} 
            task={todo.task} 
            id={todo.id} 
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
            />
        })
        return(
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;