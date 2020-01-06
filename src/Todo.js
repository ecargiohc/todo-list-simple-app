import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
// presentational; displays <div> with the task of the todo
// for every 'Todo' component, there should be an 'X' for removal option
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todo
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("TODO (CHILD) component DID UPDATE");
    //     console.log(prevProps.todo);
    //     console.log(this.props.todo);
    // };

    componentWillUnmount() {
        console.log("in component WILL UNMOUNT")
        // this method is ideal place to clear the timer: 
            // clearInterval(this.timerID);
    };

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    };
    // We are using the edit to set the state to hide/show the form! Therefore, we are setting the state each time we click on 'edit'!
    handleEdit = (e) => {
        e.preventDefault();
        // take new todo data and pass UP to the parent!
        this.props.edit(this.props.id, this.state.todo)
        this.setState({
            isEditing: false
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // or just 'todo: e.target.value' bc we only have one input 
        })
    };

    handleToggle = (e) => {
        this.props.toggleCompletion(this.props.id)
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleEdit}>
                        <input 
                        onChange={this.handleChange}
                        value={this.state.todo}
                        name="todo"
                        type="text"/>
                        <button>Save!</button>
                    </form>
                </div>
            );
        } else {
             result = (
             <div className="Todo">
                <li className={this.props.completed ? "completed" : ""}
                onClick={this.handleToggle}
                >{this.props.todo}
                {/* OR {this.props.completed && "Completed"} does same logic conditional */}
                </li>
                <button onClick={this.toggleForm}>Edit</button>
                {/* <button onClick={this.props.edit}>Edit</button> */}
                <button onClick={this.props.delete}>Delete</button>
            </div>
             )
        }
        return result;
    }
}
export default Todo;