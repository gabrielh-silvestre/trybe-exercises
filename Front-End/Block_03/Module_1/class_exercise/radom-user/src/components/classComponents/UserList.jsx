import React, { Component } from 'react';
import UserCard from './UserCard';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const res = await fetch('https://randomuser.me/api/?results=20');
      const data = await res.json();
      this.setState((prevState) => ({
        usersData: [...prevState.usersData, ...data.results],
        loading: false,
      }));
    });
  }

  shouldComponentUpdate(_, nextState) {
    const nextUsersData = nextState.usersData;

    return nextUsersData.every(({ registered: { age } }) => age < 50);
  }

  render() {
    const { usersData, loading } = this.state;

    return loading ? (
      <p>Loading</p>
    ) : (
      <article>
        {usersData.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </article>
    );
  }
}
