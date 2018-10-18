import React, { Component } from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import Pet from './Pet'

// API Client
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }
  componentDidMount() {
    petfinder.pet.find({ output: 'full', location: 'San Francisco, CA' })
    .then(data => {
      let pets

      if(data.petfinder.pets && data.petfinder.pets.pet) {
        if(Array.isArray(data.petfinder.pets.pet)){
          pets = data.petfinder.pets.pet
        } else {
          pets = [data.petfinder.pets.pet] // single pet
        }
      } else {
        pets = []
      }
      this.setState({
        pets: pets
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
          <div>
            {this.state.pets.map(pet => {
              let breed 

              if (Array.isArray(pet.breeds.breed)) {
                breed = pet.breeds.breed.join(', ')
              } else {
                breed =  pet.breeds.breed
              }
              return(
                <Pet 
                  animal={pet.animal}
                  name={pet.name}
                  breed={breed}
                  media={pet.media}
                  location={`${pet.contact.city} - ${pet.contact.state}`}
                  key={pet.id}
                />
              )

            })}
          </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));