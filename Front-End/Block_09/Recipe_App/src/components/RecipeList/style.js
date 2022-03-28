import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.main`
  container

  bg-background
`;

const StyledCategory = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
  display: none;
  }
`;

export const CategoryContainer = tw(StyledCategory)`
  py-4

  whitespace-nowrap
  overflow-x-scroll
`;

export const CardContainer = tw.div`
  last:pb-12
`;
