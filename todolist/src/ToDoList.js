import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import ToDoForm from './ToDoForm'
import './ToDoList.css'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{person: "mark", hobby:["fish","sleep"]}]
    }
    this.addTodo.bind(this)
    this.removeHobby.bind(this)
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos]
    todos.push(todo)
    this.setState({todos})
  }

  removeToDo = (cardID) => {
    console.log(cardID)
    const todos = [...this.state.todos]
    todos.splice(cardID,1)
    this.setState({todos})
  }

  removeHobby = (cardID, idx) => {
    console.log("CardID: ", cardID)
    console.log("idx hobby: ", idx)
    let todos = [...this.state.todos]
    todos[cardID].hobby.splice(idx,1)
    this.setState({todos})
  }

  render() {
    let items = this.state.todos.map((todo,idx) => {
      return <ToDoItem 
              todo={todo.person} 
              key={idx} 
              cardID={idx}
              removeToDo={this.removeToDo.bind(this,idx)} 
              hobbies={todo.hobby}
              removeHobby={this.removeHobby}
              />
    })

    return (
      <div className="ToDoList">
        <h1>My Awesome Todos</h1>
        <ToDoForm addToDo={this.addTodo}/>
        {items}
      </div>
    );
  }
}

export default ToDoList;
