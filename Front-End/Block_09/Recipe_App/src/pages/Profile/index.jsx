import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/footer';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import { Button, ButtonsContainer, Container, ProfileTitle } from './style';

function Profile() {
  const history = useHistory();
  const { pathname } = useLocation();
  const getEmail = localStorage.getItem('user');

  const handleClick = ({ target: { name } }) => {
    if (name.length > 0) {
      history.push(`/${name}`);
    } else {
      history.push('/');
      localStorage.clear();
    }
  };

  return (
    <>
      <HeaderProvider>
        <Header title="Profile" history={ history } hasSearch={ false } />
        <SearchBar path={ pathname } />
        <Footer history={ history } />
      </HeaderProvider>
      <Container>
        <ProfileTitle
          data-testid="profile-email"
        >
          {getEmail !== null && JSON.parse(getEmail).email}
        </ProfileTitle>
        <ButtonsContainer>
          <Button
            type="button"
            data-testid="profile-done-btn"
            name="done-recipes"
            onClick={ handleClick }
          >
            Done Recipes
          </Button>
          <Button
            type="button"
            data-testid="profile-favorite-btn"
            name="favorite-recipes"
            onClick={ handleClick }
          >
            Favorite Recipes
          </Button>
          <Button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClick }
          >
            Logout
          </Button>
        </ButtonsContainer>
      </Container>
      <Footer history={ history } />
    </>
  );
}

export default Profile;
