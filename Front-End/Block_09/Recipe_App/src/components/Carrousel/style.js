import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
  overflow-hidden
  whitespace-nowrap
  relative
`;

const carrouselContainer = styled.div`
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

export const CarrouselContainer = tw(carrouselContainer)`
  transition-transform
  duration-300
`;
