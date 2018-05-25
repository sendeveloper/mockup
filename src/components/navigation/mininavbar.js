import React from 'react';

import UserProfile from './userprofile';
import logo from '../../images/logo.png';
import user from '../../images/user.png';
import engage from '../../images/engagement.png';
import focus from '../../images/focus.png';
import light from '../../images/light.png';
import picture from '../../images/picture.png';

class MiniNavBar extends React.Component {
	render() {
		return (
			<div className="miniNavBar">
        <ul>
          <li>
            <a href="/">
              <img src={logo} className="small-img logo"/>
            </a>
          </li>
          <li>
            <a href="user">
              <img src={user} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="engagement">
              <img src={engage} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={focus} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={light} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={picture} className="small-img"/>
            </a>
          </li>
        </ul>
        <UserProfile />
		  </div>
		)
	}
}

export default MiniNavBar;