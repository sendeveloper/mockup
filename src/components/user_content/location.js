import React from 'react';
import FontAwesome from 'react-fontawesome';

class Location extends React.Component {
  state = {
    open: true
  }
  openContent = () => {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className="searchLocation">
        <a onClick={() => this.openContent()}>
          Locations
          {this.state.open ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>)}
        </a>
        <div className={"searchLocationContent " + (!this.state.open ? " hidden" : "")}>
          <div className="input-group add-on">
            <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
            <FontAwesome name="search" />
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <div className="checkbox">
            <label><input type="checkbox" />Chicago DMA</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Los Angeles DMA</label>
          </div>
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}

export default Location;