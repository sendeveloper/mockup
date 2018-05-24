import React from 'react';
import FontAwesome from 'react-fontawesome';

class SearchForm extends React.Component {

  render() {
    return (
      <div className="searchForm">
        <div className="searchLocationContent">
          <div className="input-group add-on">
            <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
            <FontAwesome name="search" />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;