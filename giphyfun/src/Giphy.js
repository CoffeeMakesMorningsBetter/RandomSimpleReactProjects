import React, { Component } from 'react';
import GiphyForm from './GiphyForm'

class Giphy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      giphy: []
    }
    this.search = this.search.bind(this)
  }

  search(newGif) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=dc6zaTOxFJmzC&limit=1`)
    .then(res => res.json())
    .then(json => console.log(json))
  //  let search = await fetch(`http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=dc6zaTOxFJmzC&limit=1`)
  //  let response = await search.json()
  //   console.log(response)
  }

  render() {
    return (
      <div className="App">
        <GiphyForm search={this.search}/>
      </div>
    );
  }
}

export default Giphy;
