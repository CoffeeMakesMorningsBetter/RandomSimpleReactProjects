import React, { Component } from 'react';

class ColorGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["Blue", "Aqua", "Aquamarine","BlueViolet","pink","red","green","DarkSeaGreen","DarkTurquoise"]
    }
  }

  changeAllColors = () => {
    let colors =  []
    for(let i = 0; i <= 9; i++) {
      colors.push(this.props.colors[Math.floor(Math.random() * this.props.colors.length)])
    }
    this.setState({colors})
  }

  changeSingleColor = (idx) => {
    let colors = [...this.state.colors]
    colors[idx] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    this.setState({colors})
  }

  render() {
    const container = {
      display: "flex",
      wdith: "800px",
      height: "800px",
      flexWrap: "wrap"
    }
    return (
      <div style={{container}}>

      </div>
    );
  }
}

export default ColorGrid;

ColorGrid.defaultProps = {
  colors: [
    "Blue",
    "Green",
    "Yellow",
    "Red",
    "Aqua",
    "Pink",
    "Chartreuse",
    "Crimson",
    "DeepSkyBlue",
    "DeepPink",
    "DodgerBlue",
    "Gold",
    "GoldenRod",
    "GreenYellow",
    "HotPink",
    "LightSalmon",
    "LightPink",
    "Lime",
    "LimeGreen",
    "MediumSeaGreen"
  ]
}
