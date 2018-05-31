import React from 'react';
import FontAwesome from 'react-fontawesome';

class Attributes extends React.Component {
  state = {
    open: true
  }
  openContent = () => {
    this.setState({open: !this.state.open});
  }
  
  render() {
    return (
      <div className="searchAttributes">
        <a onClick={() => this.openContent()}>
          Attributes
          {this.state.open ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>)}
        </a>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Dayparts</h3>
          <div className="checkbox">
            <label><input type="checkbox" />Breakfast <span className="small-font">(open to 11am)</span></label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Lunch <span className="small-font">(11am to 2pm)</span></label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Dinner <span className="small-font">(5pm to close)</span></label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Afternoon <span className="small-font">(2pm to 5pm)</span></label>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Channel</h3>
          <div className="checkbox">
            <label><input type="checkbox" />Online Ordering</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Order Ahead</label>
          </div>
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}

export default Attributes;