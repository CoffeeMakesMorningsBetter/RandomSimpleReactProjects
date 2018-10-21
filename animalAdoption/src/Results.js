import React, { Component } from 'react';
import pf from 'petfinder-client';
import Pet from './Pet';
import SearchBox from './SearchBox';
import { Consumer } from './SearchContext';

// API Client
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  // runs to populate data
  componentDidMount() {
    this.search()
  }
  // will read from consumer context 
  // need to search 
  // create function with data inside componentDidMount ie: call it search
  search = () => {
    petfinder.pet.find({
      output: 'full',
      location: this.props.searchParams.location,
      animal: this.props.searchParams.animal,
      breed: this.props.searchParams.breed
    })
      .then(data => {
        let pets

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
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
      <div className='search'>
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(', ')
          } else {
            breed = pet.breeds.breed
          }
          return (
            <Pet
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city} - ${pet.contact.state}`}
              id={pet.id}
              key={pet.id}
            />
          )

        })}
      </div>

    )
  }
}

// allows Results to use component life cycle methods to results
// Use an explicit function declaration because you can see in callstack error get a named function to see
export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}

