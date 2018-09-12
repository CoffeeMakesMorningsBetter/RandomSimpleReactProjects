import React, { Component } from 'react'

class ToDoItem extends Component {
  render() {
    const {hobbies, cardID, removeHobby, todo} = this.props
    let things = hobbies.map((hobby, idx) => {
      return(
        <li key={idx}>
          <span>{hobby}</span><button onClick={() => removeHobby(cardID, idx)}>x</button>
        </li>
      )
    })
    return (
      <div className="ToDo">
        <h3>{todo}</h3>
        <ul>
          {things}
        </ul>
        <button onClick={this.props.removeToDo}>Delete Card</button>
      </div>
    )
  }
}

export default ToDoItem