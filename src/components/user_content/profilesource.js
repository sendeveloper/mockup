import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProfileSource extends React.Component {
  state = {
    open: true
  }
  openContent = () => {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className="profileSource">
        <a onClick={() => this.openContent()}>
          Profile Source
          {this.state.open ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>)}
        </a>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <div className="radio">
            <label><input type="radio" name="optradio" />All <span className="small-font">(23M+)</span></label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" />All Opted in <span className="small-font">(2.7M)</span></label>
          </div>
          <div className="radio disabled">
            <label>
              <input type="radio" name="optradio" />
              <select>
                <option value="0">Other Databases</option>
                <option value="1">Sample Database1</option>
                <option value="2">Sample Database2</option>
              </select>
            </label>
          </div>
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}

export default ProfileSource;