import React from 'react';
import PropTypes from 'prop-types';

import { MdOutlineExplore } from 'react-icons/md';
import { GiKnifeFork } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';

import Container from './style';

function Footer({ history }) {
  return (
    <Container data-testid="footer">
      <button
        type="button"
        onClick={ () => { history.push('/drinks'); } }
      >
        <BiDrink className="w-10 h-10 text-background" />
      </button>
      <button
        type="button"
        onClick={ () => { history.push('/explore'); } }
      >
        <MdOutlineExplore className="w-10 h-10 text-background" />
      </button>
      <button
        type="button"
        onClick={ () => { history.push('/foods'); } }
      >
        <GiKnifeFork className="w-10 h-10 text-background" />
      </button>
    </Container>
  );
}

export default Footer;

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
