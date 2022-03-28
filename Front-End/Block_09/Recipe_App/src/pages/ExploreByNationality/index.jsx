import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import Footer from '../../components/footer';
import NationalityList from '../../components/NationalityList';

function ExploreByNationality() {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <HeaderProvider>
        <Header title="Explore Nationalities" history={ history } hasSearch />
        <SearchBar path={ pathname } />
      </HeaderProvider>
      <NationalityList />
      <Footer history={ history } />
    </>
  );
}

export default ExploreByNationality;
