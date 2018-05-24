import React from 'react';

import SearchActionButton from './searchactionbutton';
import SearchForm from './searchform';
import SearchList from './searchlist';
import Pagination from './pagination';

class SearchContent extends React.Component {
  render() {
    return (
      <div className="searchContent">
        <SearchActionButton />
        <SearchForm />
        <SearchList />
        <Pagination />
      </div>
    )
  }
}

export default SearchContent;