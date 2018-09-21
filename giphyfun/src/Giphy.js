import React, { Component } from 'react';
import GiphyForm from './GiphyForm'
import {GiphyCard} from './GiphyCard'

class Giphy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      giphy: []
    }
    this.search = this.search.bind(this)
  }

  async componentDidMount() {
    let search = await fetch('http://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC')
    let response = await search.json()
    let randomGif = response.data.images.downsized.url
    this.setState({giphy: [{ newGif: 'Random Giph of the Day', url: randomGif}]})
  }

  async search(newGif) {
    let search = await fetch(`http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=dc6zaTOxFJmzC&limit=1`)
    let response = await search.json()
    let searchTerm = {
      newGif: newGif,
      url: response.data[0].images.downsized.url,
    }
    this.setState({giphy: [...this.state.giphy,searchTerm]})
  }

  render() {
    let giphy = this.state.giphy.map((v,i) => <GiphyCard {...v} key={i}></GiphyCard>)

    return (
      <div className="App">
        <GiphyForm search={this.search} />
        {giphy}
      </div>
    );
  }
}

export default Giphy;

    // fetch(`http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=dc6zaTOxFJmzC&limit=1`)
    // .then(res => res.json())
    // .then(json => console.log(json))
