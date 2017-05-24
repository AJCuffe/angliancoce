import React from 'react';

class opportunities extends React.Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Opportunities</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default opportunities;
