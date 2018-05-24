import React from 'react';

import ProfileSource from './profilesource';
import Location from './location';
import Attributes from './attributes';
import Demographic from './demographic';
import Purchase from './purchase';

class SearchDetails extends React.Component {
  render() {
    return (
      <div className="searchDetails">
        <ProfileSource />
        <Location />
        <Attributes />
        <Demographic />
        <Purchase />
      </div>
    )
  }
}

export default SearchDetails;