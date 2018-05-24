import React from 'react';

import MenuItem from './menuitem';
import menudata from './menudata.json';

class Menu extends React.Component {
  state = {
    active: 0
  }
  menuClick = i => {
    this.setState({active: i});
  }
	render() {
		return (
			<div className="navbar">
				<h3>Engagement</h3>
				<ul className="menu">
				{
					menudata.length ? (
						menudata.map((each, i) => (
								<MenuItem data={each} key={i} order={i} active={this.state.active===i} parent={this}/>
							))
					) : (false)
				}
				</ul>
			</div>
		)
	}
}

export default Menu;