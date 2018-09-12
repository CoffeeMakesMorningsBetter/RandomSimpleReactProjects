import React, { Component } from 'react';
import {ToDoItem} from './ToDoItem'
import ToDoForm from './ToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{todo: "eat"},{todo: "sleep"}]
    }
    this.addTodo.bind(this)
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos]
    todos.push(todo)
    this.setState({todos})
  }

  render() {
    let items = this.state.todos.map((todo,idx) => {
      return <ToDoItem todo={todo.todo} key={idx}/>
    })

    return (
      <div>
        <ToDoForm addToDo={this.addTodo}/>
        {items}
      </div>
    );
  }
}

export default ToDoList;
