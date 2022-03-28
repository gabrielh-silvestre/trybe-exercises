import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { HiOutlineUser, HiSearch } from 'react-icons/hi';
import HeaderContext from '../../contexts/HeaderContext/HeaderContext';

import { Container, ContentContainer, HeaderTitle } from './style';

function Header({ title, history, hasSearch }) {
  const { showSearchBar, setShowSearchBar } = useContext(HeaderContext);

  return (
    <Container>
      <ContentContainer>
        <button type="button" onClick={ () => history.push('/profile') }>
          <HiOutlineUser className="w-10 h-10 text-background" />
        </button>

        <HeaderTitle data-testid="page-title">{title}</HeaderTitle>

        {hasSearch && (
          <button
            type="button"
            onClick={ () => setShowSearchBar(!showSearchBar) }
          >
            <HiSearch className="w-10 h-10 text-background" />
          </button>
        )}
      </ContentContainer>
    </Container>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool.isRequired,
};

export default Header;
