import React from 'react';
import FontAwesome from 'react-fontawesome';


class Purchase extends React.Component {
  state = {
    open: true
  }
  openContent = () => {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div className="searchPurchase">
        <a onClick={() => this.openContent()}>
          Purchase
          {this.state.open ? (<FontAwesome name="chevron-up"/>) : (<FontAwesome name="chevron-down"/>)}
        </a>
        <div className={"form-group purchaseStartEnd " + (!this.state.open ? " hidden" : "")}>
          <div className="col-md-6">
            <span>Start</span>
            <div className="input-group end">
              <input type="text" min="18" max="100" id="myRange" className="form-control"/>
              <FontAwesome name="calendar"/>
            </div>
          </div>
          <div className="col-md-6">
            <span>End</span>
            <div className="input-group end">
              <input type="text" min="18" max="100" id="myRange" className="form-control"/>
              <FontAwesome name="calendar"/>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Activeness Level</h3>
          <div className="checkbox">
            <label><input type="checkbox" />Heavy</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Medium</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Light</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />New</label>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Loyalty Tiers</h3>
          <div className="checkbox">
            <label><input type="checkbox" />Platinum</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Gold</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Silver</label>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Sales</h3>
          <div className="slider">
            <input type="range" min="0" max="500" id="salesRange" />
            <span className="first">$0</span>
            <span className="last">$5,000</span>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <h3>Transactions</h3>
          <div className="slider">
            <input type="range" min="0" max="1000" id="salesRange" />
            <span className="first">0</span>
            <span className="last">1,000</span>
          </div>
        </div>
        <div className={"form-group " + (!this.state.open ? " hidden" : "")}>
          <div className="checkbox">
            <label><input type="checkbox" />Used coupon</label>
          </div>
        </div>
      </div>
    )
  }
}

export default Purchase;