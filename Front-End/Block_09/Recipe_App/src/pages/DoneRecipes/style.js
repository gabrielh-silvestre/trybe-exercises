import tw from 'tailwind-styled-components';

export const Container = tw.main`
  container

  bg-background
  pb-1
`;

export const CardContainer = tw.div`
  flex
  rounded-md
  shadow-md
  bg-white
  mb-4
`;

export const CardContent = tw.div`
  w-1/2
  px-2
  py-2
  flex
  flex-col
  justify-evenly
`;

export const FiltersContainer = tw.div`
  py-4
  whitespace-nowrap

  flex
  justify-center
`;

export const TagContent = tw.span`
  px-1.5
  bg-tags
  rounded-xl
  text-sm
`;
