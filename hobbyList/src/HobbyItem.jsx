import React, { Component } from 'react'

class HobbyItem extends Component {
  render() {
    const {hobbies, cardID, removeSingleHobby, person} = this.props
    let things = hobbies.map((hobby, idx) => {
      return(
        <li key={idx}>
          <span>{hobby}</span><button onClick={() => removeSingleHobby(cardID, idx)}>x</button>
        </li>
      )
    })
    return (
      <div className="ToDo">
        <h3 style={{margin: "5px"}}>{person}</h3>
        <ul>
          {things}
        </ul>
        <button onClick={this.props.removePerson}>Delete Card</button>
      </div>
    )
  }
}

export default HobbyItem