import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { CarrouselContainer, Container } from './style';

export default function Carrousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <Container>
      <CarrouselContainer
        activeIndex={ activeIndex }
      >
        {
          React.Children.map(children, (child) => (
            React.cloneElement(child, { width: '100%' })
          ))
        }
      </CarrouselContainer>

      <button
        type="button"
        onClick={ () => {
          updateIndex(activeIndex - 1);
        } }
      >
        <HiChevronLeft
          className="h-14 w-14 text-gray-500 opacity-70
            absolute left-0 inset-y-0 my-auto"
        />
      </button>
      <button
        type="button"
        onClick={ () => {
          updateIndex(activeIndex + 1);
        } }
      >
        <HiChevronRight
          className="h-14 w-14 text-gray-500 opacity-70
            absolute right-0 inset-y-0 my-auto"
        />
      </button>
    </Container>
  );
}

Carrousel.propTypes = {
  children: PropTypes.arrayOf(React.Component).isRequired,
};
