import React from 'react';

import SubMenuItem from './submenuitem';

class SubMenu extends React.Component {
  state = {
    active: 0
  }
  menuClick = i => {
    this.setState({active: i});
  }
	render() {
		return (
			<React.Fragment>
			{
				this.props.data.length ? (
					<ul className="submenu">
					{
						this.props.data.map((each, i) => (
							<SubMenuItem data={each} key={i} order={i} active={this.state.active===i} parent={this}/>
						))
					}
					</ul>
				)	: (false)
			}
			</React.Fragment>
		)
	}
}

export default SubMenu;