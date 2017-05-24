import React from 'react';
import { connect } from 'react-redux';
import { benchMembersFetchData } from '../../actions/benchMembers';

class benchMembers extends React.Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3001/api/bench');
  }

  render() {
    if(this.props.hasErrored) {
      return <p>There was an error loading the data.</p>;
    }

    if(this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Bench Members</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.benchMembers.map((benchMembers) => (
              <tr key={benchMembers.id}>
                <td>{benchMembers.id}</td>
                <td>{benchMembers.firstName}</td>
                <td>{benchMembers.lastName}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    benchMembers: state.benchMembers,
    hasErrored: state.benchMembersHasErrored,
    isLoading: state.benchMembersIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(benchMembersFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(benchMembers);
