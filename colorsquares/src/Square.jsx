import React from 'react'

export const Square = (props) => {
  let color = props.color
  return(
    <div style={{background: color, width: "250px", height: "250px", margin: "0px"}} onClick={props.changeSingleColor} onDoubleClick={props.changeAllColors}></div>
  )
}

