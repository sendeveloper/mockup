import React from 'react';

class Pagination extends React.Component {
  render() {
    return (
      <div className="paginationContainer">
        <ul className="pagination">
          <li className="prev"><a href="#">Prev</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li className="next"><a href="#">Next</a></li>
        </ul>
      </div>
    )
  }
}

export default Pagination;