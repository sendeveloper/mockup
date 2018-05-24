import React from 'react';
import FontAwesome from 'react-fontawesome';

class SearchListEach extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.activeness}</td>
        <td>{this.props.data.sales}</td>
        <td>{this.props.data.transaction}</td>
        <td className="icons">
          <a href="#"><FontAwesome name="facebook-square" /></a>
          <a href="#"><FontAwesome name="envelope" /></a>
        </td>
        <td>{this.props.data.location}</td>
        <td>{this.props.data.since}</td>
        <td>
          <a href="#"><FontAwesome name="ellipsis-h" /></a>
        </td>
      </tr>
    )
  }
}

export default SearchListEach;