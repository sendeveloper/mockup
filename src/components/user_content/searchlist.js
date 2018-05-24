import React from 'react';

import tabledata from './tabledata.json';
import SearchListEach from './searchlisteach';

class SearchList extends React.Component {
  render() {
    return (
      <div className="searchList">
        <table className="searchTable">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Activeness</th>
              <th>Sales</th>
              <th>Transactions</th>
              <th>Opted In</th>
              <th>Location</th>
              <th>Customer Since</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            tabledata.length ? (
              tabledata.map((each, i) => (
                  <SearchListEach data={each} key={i}/>
                ))
            ) : (false)
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default SearchList;