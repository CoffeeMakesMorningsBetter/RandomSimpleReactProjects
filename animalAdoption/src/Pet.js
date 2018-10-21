import React, { Component } from 'react';
import {Link} from '@reach/router';

class Pet extends Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props

    let photos = []

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn")
    }

    // solves if no value
    const hero = photos[0] ? photos[0].value: "data:image/jpeg;base64,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"

    return (
      <Link to={`/details/${id}`} className='pet'>
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} – {breed} – {location}
          </h2>
        </div>
      </Link>
    )
  }
}

export default Pet