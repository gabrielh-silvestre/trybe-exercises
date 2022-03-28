import tw from 'tailwind-styled-components';

export const Container = tw.div`
  container

  bg-sections
`;

export const SearchForm = tw.form`
  grid
  grid-rows-3
`;

export const SearchButton = tw.button`
  w-1/2

  mx-auto
  mb-2

  font-bold
  text-white

  rounded-md

  bg-details
`;
