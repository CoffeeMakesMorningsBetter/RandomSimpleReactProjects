import React from 'react';

const SearchContext = React.createContext({
  location: "San Francisco, CA",
  animal: "",
  breed: "",
  breeds: [],
  //GiveMethods
  handleLocationChange() {},
  handleBreedChange() {},
  handleAnimalChange() {},
  getBreeds() {}
})

export const Provider = SearchContext.Provider
export const Consumer = SearchContext.Consumer