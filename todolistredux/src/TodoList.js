import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Todo from './Todo';
import { connect } from 'react-redux';
import { ADD_TODO } from './actions';


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }
  
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: ADD_TODO,
      payload: { task: this.state.task, status: "incomplete", id: uuidv4() }
    })
    this.setState({task: ""})
  }

  render() {
    let task = this.props.task.map((todo) => <Todo key={uuidv4()} task={todo.task} status={todo.status}/>)
    return(
      <React.Fragment>
      <h1>My Todos</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          <input 
          type="text"
          id="todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          />
        </label>
        <input type="submit"/>
      </form>
      <div>
      {task}
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  task: reduxState.task
})

export default connect(mapStateToProps)(TodoList)
