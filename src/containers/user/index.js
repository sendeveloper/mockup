import React from 'react';

import Navigation from '../../components/navigation';
import EngagementContent from '../../components/engagement_content'; 

class User extends React.Component{
  render(){
    return(
      <div>
        <Navigation/>
        <EngagementContent />
      </div>
    )
  }
}

export default User;
