import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingComponent from './LoadingComponent';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      loading: false,
    };

    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ user: user.name, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;

    return loading ? (
      <LoadingComponent />
    ) : (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        <div>
          <h3 data-testid="header-user-name">{user}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/search" data-testid="link-to-search">
                Search
              </Link>
            </li>
            <li>
              <Link to="/favorites" data-testid="link-to-favorites">
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/profile" data-testid="link-to-profile">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
