import React, {Component} from 'react'
import TodoItem from './TodoItem'

// export default allows you to not use curly braces when importing
export default class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            todos: [{id:0, title: "Walk moxie", description: "My cat moxie likes walks"}],
            count: 1 // keeps track of the key for the item
        };
    }

    onChange(event) {
        // bracket notation below is ES6 feature for easier key naming
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const todoCopy = this.state.todos.slice();
        todoCopy.push({
            id: this.state.count,
            title: this.state.title,
            description: this.state.description
        });
        // alternative to this is [...this.state.todos, todo]
        this.setState({
            title: '',
            description: '',
            todos: todoCopy,
            count: this.state.count + 1
        });
    }

    render(){
        const list = this.state.todos.map((todo) => {
            return <TodoItem key={todo.id}
                             id={todo.id}
                             title={todo.title}
                             description={todo.description}
                             />;
        });

        return(
                <div>
                    <form onSubmit={this.onSubmit.bind(this)} className="form-group">
                        <label>
                            Title:
                            <input
                                onChange={this.onChange.bind(this)}
                                type="text"
                                name="title"
                                value={this.state.title}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                onChange={this.onChange.bind(this)}
                                type="text"
                                name="description"
                                value={this.state.description}
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    <div>
                        To Do:
                        <ul className="list-group">
                            {list}
                        </ul>
                    </div>
                </div>
            );
    }
}

// must bind this in onChange above because 'addItem' is actually not bound to the current
// component OR you could put the method inside of the constructor
// this.addItem = this.addItem.bind(this) and refer to as this.addItem everywhere else
