import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LoadingComponent from '../components/LoadingComponent';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: false,
    };

    this.fetchUser = this.fetchUser.bind(this);
    this.userInfos = this.userInfos.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ user, loading: false });
    });
  }

  userInfos({ description, email, image, name }) {
    return (
      <article>
        <section>
          <img src={ image } alt={ name } data-testid="profile-image" />
          <h2>{name}</h2>
        </section>
        <section>
          <p>{description}</p>
          <p>{email}</p>
        </section>
        <section>
          <Link to="/profile/edit">Editar perfil</Link>
        </section>
      </article>
    );
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? <LoadingComponent /> : this.userInfos(user)}
      </div>
    );
  }
}
