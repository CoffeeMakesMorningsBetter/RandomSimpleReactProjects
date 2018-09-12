import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: ""
    }
    this.handleChanges.bind(this)
    this.handleSubmit.bind(this)
  }

  handleChanges = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo({...this.state})
    this.setState({todo: ""})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
          />
        </label>
        <button type="submit">Enter Awesome Todo</button>
      </form>
    )
  }
}

export default ToDoForm