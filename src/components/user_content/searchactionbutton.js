import React from 'react';
import FontAwesome from 'react-fontawesome';

class SearchActionButton extends React.Component {
  render() {
    return (
      <div className="searchActionButton">
        <div className="col-md-6">
          <button className="btn-default btn-add">Add New Customer</button>
        </div>
        <div className="col-md-6">
          <button className="btn-default btn-create">
            Create Segment
            <FontAwesome name="chevron-down"/>
          </button>
        </div>
        <div className="clear" />
      </div>
    )
  }
}

export default SearchActionButton;