import React, { Component } from 'react';

export default class UserCard extends Component {
  render() {
    const {
      name: { first, last },
      registered: { age },
      email,
      picture: { large },
    } = this.props.user;

    return (
      <section>
        <div>
          <img src={large} alt={`${first} ${last}`} />
        </div>
        <div>
          <h3>{`${first} ${last}`}</h3>
          <p>{age}</p>
          <p>{email}</p>
        </div>
      </section>
    );
  }
}
