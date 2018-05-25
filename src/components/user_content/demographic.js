import React from 'react';
import FontAwesome from 'react-fontawesome';


class Demographic extends React.Component {
  state = {
    open: true
  }
  openContent = () => {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className="searchDemographic">
        <a onClick={() => this.openContent()}>
          Demographic
          {this.state.open ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>)}
        </a>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Age</h3>
          <div className="slider">
            <input type="range" min="18" max="100" id="ageRange" />
            <span className="first">18</span>
            <span className="last">100</span>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Income</h3>
          <div className="slider">
            <input type="range" min="0" max="250000" id="incomeRange" />
            <span className="first">0</span>
            <span className="last">250K</span>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Gender</h3>
          <select>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}

export default Demographic;