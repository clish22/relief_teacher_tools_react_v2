import React, { Component } from 'react';
import randNumsArray from './seeds';
import User from './User';

export class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: randNumsArray,
    };
  }

  handleDelete = (userID) => {
    const users = this.state.users.filter((user) => user._id !== userID);
    this.setState({ users });
  };

  render() {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Favourite Number</th>
              <th scope="col">Favourite Colour</th>
              <th scope="col">Score</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <User key={user._id} user={user} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default UsersTable;
