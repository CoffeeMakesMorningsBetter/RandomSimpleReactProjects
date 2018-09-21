import React, { Component } from 'react';

class HobbyForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      person: "",
      hobby: ""
    }
    this.handleChanges.bind(this)
    this.handleSubmit.bind(this)
  }

  handleChanges = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPerson({
      person: this.state.person, 
      hobby: this.state.hobby.split(",")
    })
    this.setState({person: "", hobby: ""})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
          <input
          type="text"
          name="person"
          value={this.state.person}
          onChange={this.handleChanges}
          />
        <label>Hobbies</label>
          <input
          type="text"
          name="hobby"
          value={this.state.hobby}
          onChange={this.handleChanges}
          />
        <button type="submit">Enter Awesomeness</button>
      </form>
    )
  }
}

export default HobbyForm