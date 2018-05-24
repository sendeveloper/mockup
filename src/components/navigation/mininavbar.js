import React from 'react';

import UserProfile from './userprofile';
import br from '../../images/br.png';
import user from '../../images/user.png';
import broad from '../../images/broadcasting.png';
import aim from '../../images/aim.png';
import light from '../../images/light.png';
import picture from '../../images/picture.png';

class MiniNavBar extends React.Component {
	render() {
		return (
			<div className="miniNavBar">
        <ul>
          <li>
            <a href="/">
              <img src={br} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="user">
              <img src={user} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={broad} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={aim} className="small-img"/>
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