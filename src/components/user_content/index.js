import React from 'react';

import SearchDetails from './searchdetails';
import SearchContent from './searchcontent';
import Header from './header';

class UserContent extends React.Component {
  render() {
    return (
      <div className="userContainer">
        <Header />
        <div className="userMainContent">
          <SearchDetails />
          <SearchContent />
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}

export default UserContent;