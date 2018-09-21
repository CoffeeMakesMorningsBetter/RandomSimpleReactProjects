import React from 'react'

export const GiphyCard = (props) => {
  return (
    <div>
      <img src={props.url}></img>
      <p>Search Term:{props.newGif}</p>
    </div>
  )
}
