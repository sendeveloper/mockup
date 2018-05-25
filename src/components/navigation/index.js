import React from 'react';

import MiniNavBar from './mininavbar';
import Menu from './menu';

class Navigation extends React.Component {
  render() {
    console.log(document.location.href);
    return (
      <div>
        <MiniNavBar />
        <Menu/>
      </div>
    )
  }
}

export default Navigation;