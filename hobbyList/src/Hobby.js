import React, { Component } from 'react';
import HobbyItem from './HobbyItem'
import HobbyForm from './HobbyForm'
import './Hobby.css'

class Hobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hobbies: [{person: "Klark", hobby:["eat","sleep", "read books"]}]
    }
    this.addPerson.bind(this)
    this.removeSingleHobby.bind(this)
  }

  addPerson = (hobby) => {
    const hobbies = [...this.state.hobbies]
    hobbies.push(hobby)
    this.setState({hobbies})
  }

  removePerson = (cardID) => {
    const hobbies = [...this.state.hobbies]
    hobbies.splice(cardID,1)
    this.setState({hobbies})
  }

  removeSingleHobby = (cardID, idx) => {
    console.log("CardID: ", cardID)
    console.log("idx hobby: ", idx)
    let hobbies = [...this.state.hobbies]
    hobbies[cardID].hobby.splice(idx,1)
    this.setState({hobbies})
  }

  render() {
    let items = this.state.hobbies.map((hobby,idx) => {
      return <HobbyItem 
              person={hobby.person} 
              key={idx} 
              cardID={idx}
              removePerson={this.removePerson.bind(this,idx)} 
              hobbies={hobby.hobby}
              removeSingleHobby={this.removeSingleHobby}
              />
    })

    return (
      <div>
        <h1>Awesome Hobbies</h1>
        <HobbyForm addPerson={this.addPerson}/>
        {items}
      </div>
    );
  }
}

export default Hobby;
