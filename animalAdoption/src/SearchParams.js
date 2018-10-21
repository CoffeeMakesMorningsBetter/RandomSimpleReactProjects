import React, { Component } from 'react';
import SearchBox from './SearchBox';

class SearchParams extends Component {
  render() {
    return(
      <div className="search-box">
        <SearchBox search={this.search}/>
      </div>
    )
  }
}

export default SearchParams