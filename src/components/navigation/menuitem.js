import React from 'react';
import FontAwesome from 'react-fontawesome';


import SubMenu from './submenu';

class MenuItem extends React.Component {
	render() {
		return (
			<li className={(this.props.active ? 'active' : '') + (this.props.data.submenu ? ' hasSubMenu' : '')} onClick={() => this.props.parent.menuClick(this.props.order)}>
				<a href={this.props.data.url}>
					{this.props.data.name}
          {this.props.data.submenu && 
            (this.props.active ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>))
          }
  			</a>
				{
					this.props.data.submenu ? (<SubMenu data={this.props.data.submenu}/>) : false
				}
			</li>
		)
	}
}

export default MenuItem;