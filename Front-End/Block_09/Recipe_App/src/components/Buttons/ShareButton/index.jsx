import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import copy from 'clipboard-copy';

import shareIcon from '../../../images/shareIcon.svg';

export default function ShareButton({ favoriteId, type, testid }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  // const path = pathname.split('/');
  const [isCopied, setIsCopied] = useState(false);

  const isItFood = pathname.includes('foods') || type === 'food';

  const handleClipUrl = async () => {
    if (isItFood) {
      await copy(`http://localhost:3000/foods/${id || favoriteId}`);
    } else {
      await copy(`http://localhost:3000/drinks/${id || favoriteId}`);
    }
    // await copy(`http://localhost:3000/${path[1]}/${path[2]}`);
    setIsCopied(true);
    // const magicNumber = 1000;
    // setTimeout(() => setIsCopied(false), magicNumber);
  };

  return (
    <>
      {isCopied && <p>Link copied!</p>}
      <button type="button" data-testid="share-btn" onClick={ handleClipUrl }>
        <img src={ shareIcon } data-testid={ testid } alt="share icon" />
      </button>
    </>
  );
}

ShareButton.propTypes = {
  testid: PropTypes.string,
  favoriteId: PropTypes.string,
  type: PropTypes.string,
};

ShareButton.defaultProps = {
  testid: '',
  favoriteId: undefined,
  type: undefined,
};
