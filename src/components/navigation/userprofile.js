import React from 'react';
import profile from '../../images/profile.png';

class UserProfile extends React.Component {
  render() {
    return (
      <div className="profile">
        <a href="home">
          <img src={profile} className="small-img" />
        </a>
      </div>
    )
  }
}

export default UserProfile;