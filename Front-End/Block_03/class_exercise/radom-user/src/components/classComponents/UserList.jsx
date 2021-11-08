import React, { Component } from 'react';
import UserCard from './UserCard';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json();
    this.setState((prevState) => ({
      usersData: [...prevState.usersData, ...data.results],
    }));
  }

  shouldComponentUpdate(_, nextState) {
    const nextUsersData = nextState.usersData;

    return nextUsersData.every(({ registered: { age } }) => age < 50);
  }

  render() {
    const { usersData } = this.state;

    return (
      <article>
        {usersData.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </article>
    );
  }
}
