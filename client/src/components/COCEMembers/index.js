import React from 'react';
import { connect } from 'react-redux';
import { coceMembersFetchData } from '../../actions/coceMembers';

class coceMembers extends React.Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3001/api/coce');
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
        <div className="panel-heading">COCE Members</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Home Organisation</th>
              <th>AW Role</th>
            </tr>
          </thead>
          <tbody>
              {this.props.coceMembers.map((coceMembers) => (
                <tr key={coceMembers.id}>
                  <td>{coceMembers.id}</td>
                  <td>{coceMembers.firstName}</td>
                  <td>{coceMembers.lastName}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    //
    // <ul>
    //   {this.props.items.map((item) => (
    //     <li key={item.id}>
    //       {item.firstName}
    //     </li>
    //   ))}
    // </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coceMembers: state.coceMembers,
    hasErrored: state.coceMembersHasErrored,
    isLoading: state.coceMembersIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(coceMembersFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(coceMembers);
