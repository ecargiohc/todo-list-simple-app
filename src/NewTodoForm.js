import React, {Component} from 'react';
import uuid from "uuid/v4";

class NewTodoForm extends Component {
// form with one text input for the task to be created
// upon submit, new task is created
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {...this.state, id: uuid(), completed: false}
    this.props.createTodo(newTodo);
    this.setState({
        todo: ""
    })
};

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
};
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todos">Todos</label>
                <input type="text"
                name="todo"
                value={this.state.todo}
                id="todo"
                onChange={this.handleChange}
                />
                <button>ADD</button>
            </form>
        )
    }
}
export default NewTodoForm;