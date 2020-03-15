import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./TodoList.css";

// parent/container holds all state
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    };

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    edit = (id, updatedTodo) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, todo: updatedTodo}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    };

    delete = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    };

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    };
    
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("TODOLIST (PARENT) component DID UPDATE");
    //     console.log(prevState.todos);
    //     console.log(this.state.todos);
    // };

    render() {
        const todos = this.state.todos.map(t => 
            <Todo 
            id={t.id}
            todo={t.todo}
            edit={this.edit}
            delete={() => this.delete(t.id)}
            completed={t.completed}
            toggleCompletion={this.toggleCompletion}
            />)
        return(
            <div className="TodoList">
                <h1>Todo List <span>Simple React Todo List App</span></h1>
                <NewTodoForm createTodo={this.create}/>
                {todos}
            </div>
        )
    }
}
export default TodoList;