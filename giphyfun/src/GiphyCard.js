import React from 'react'
import './GiphyCard.css'

export const GiphyCard = (props) => {
  return (
    <div class='giphyCard'>
      <img src={props.url}></img>
      <p>Search Term: {props.newGif}</p>
    </div>
  )
}
