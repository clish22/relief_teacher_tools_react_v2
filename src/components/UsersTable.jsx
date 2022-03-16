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
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <User
                  _id={user._id}
                  name={user.name}
                  randColor={user.randColor}
                  randNum={user.randNum}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default UsersTable;
