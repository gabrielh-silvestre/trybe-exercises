import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HeaderContext from './HeaderContext';

function HeaderProvider({ children }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const providerData = {
    showSearchBar,
    setShowSearchBar,
  };

  return (
    <HeaderContext.Provider value={ providerData }>
      {children}
    </HeaderContext.Provider>
  );
}
HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
