import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Loadbale from 'react-loadable';
import pf from "petfinder-client";
import { Provider } from "./SearchContext";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadbaleDetails = Loadbale({
  loader: () => import('./Details'),
  loading() {
    return <h1>loading split out code</h1>
  }
})
// COULD USE A HOO Component since its not dry
const LoadbaleResults = Loadbale({
  loader: () => import('./Results'),
  loading() {
    return <h1>loading split out code</h1>
  }
})

const LoadbaleSearchParams = Loadbale({
  loader: () => import('./SearchParams'),
  loading() {
    return <h1>loading split out code</h1>
  }
})



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <LoadbaleResults path="/" />
            <LoadbaleDetails path="/details/:id" />
            <LoadbaleSearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));