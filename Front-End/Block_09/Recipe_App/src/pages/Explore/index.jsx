import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import Footer from '../../components/footer';
import { Button, Container } from './style';

function Explore() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <>
      <HeaderProvider>
        <Header title="Explore" history={ history } hasSearch={ false } />
        <SearchBar path={ pathname } />
      </HeaderProvider>
      <Container>
        <Button
          name="foods"
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </Button>
        <Button
          name="drinks"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </Button>
      </Container>
      <Footer history={ history } />
    </>
  );
}

export default Explore;
