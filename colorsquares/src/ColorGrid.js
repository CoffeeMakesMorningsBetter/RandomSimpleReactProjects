import React, { Component } from 'react';
import { Square } from './Square'

class ColorGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["Blue", "Aqua", "Aquamarine","BlueViolet","pink","red","green","DarkSeaGreen","DarkTurquoise"]
    }
    this.changeAllColors.bind(this)
  }

  changeAllColors = () => {
    let colors =  []
    for(let i = 0; i < 9; i++) {
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
    const squares = this.state.colors.map((color,idx) => {
      return <Square 
        color={color} 
        key={idx} 
        changeAllColors={this.changeAllColors}
        changeSingleColor={this.changeSingleColor.bind(this,idx)}
        />
    })

    const container = {
      margin: "0 auto",
      display: "flex",
      width: "750px",
      height: "750px",
      flexWrap: "wrap",
      border: "black 5px solid"
    }
    return (
      <div>
      <h1 style={{textAlign: "center"}}>Color Squares</h1>
      <div style={container}>
      {squares}
       </div>
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
