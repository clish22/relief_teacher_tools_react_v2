import React, { Component } from 'react';

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleDecrement = () => {
    this.setState({ score: this.state.score - 1 });
  };

  render() {
    const { _id, name, randColor, randNum } = this.props.user;

    return (
      <tr>
        <th scope="row">{_id}</th>
        <td>{name}</td>
        <td>{randNum}</td>
        <td style={{ backgroundColor: randColor }}>{randColor}</td>
        <td>
          <button
            onClick={this.handleDecrement}
            className="btn btn-sm btn-secondary m-2"
          >
            -
          </button>
          <span>{this.state.score}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-sm btn-secondary m-2"
          >
            +
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              this.props.onDelete(_id);
            }}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
