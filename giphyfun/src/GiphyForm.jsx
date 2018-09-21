import React, { Component } from 'react'
import './GiphyForm.css'

class GiphyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      findMeAGiphy: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.search(this.state.findMeAGiphy)
    this.setState({ findMeAGiphy: '' })
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={this.handleSubmit}>
          <label>Find Me A Giphy
        <input
              type="text"
              name="findMeAGiphy"
              value={this.state.findMeAGiphy}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit">
          </input>
        </form>
      </div>

    )
  }
}

export default GiphyForm