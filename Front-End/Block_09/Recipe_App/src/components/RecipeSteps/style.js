import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.section`
  p-4

  rounded-md

  bg-white
`;

export const RecipeStep = tw.label`
  decoration-black
  ${({ isMarked }) => (isMarked ? 'line-through' : 'no-underline')}
  flex
  items-center
`;

const button = styled.button`
  &:disabled {
    opacity: 0.8;
  }
`;

export const Button = tw(button)`
  w-full
  h-8
  font-bold
  text-white
  bg-details
`;

export const ListContent = tw.div`
  flex
  flex-col
`;
