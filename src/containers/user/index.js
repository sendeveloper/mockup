import React from 'react';

import MiniNavBar from '../../components/navigation/mininavbar';
import UserContent from '../../components/user_content'; 

class User extends React.Component{
  render(){
    return(
      <div>
        <MiniNavBar/>
        <UserContent />
      </div>
    )
  }
}

export default User;
