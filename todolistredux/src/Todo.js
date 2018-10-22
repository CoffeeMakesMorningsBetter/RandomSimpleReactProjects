import React, { Component } from 'react';

class Todo extends Component {
  deleteItem = () => {
    this.props.delete(this.props.id)
  }

  updateItem = () => {
    this.props.updateStatus(this.props.id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.task}</h3>
        <h5>status: {this.props.status}</h5>
        <button onClick={this.deleteItem}>X</button>
        <button onClick={this.updateItem}>Update Status</button>
      </div>
    )
  }
}

export default Todo