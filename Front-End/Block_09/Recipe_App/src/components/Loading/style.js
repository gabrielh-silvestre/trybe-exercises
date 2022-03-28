import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  justify-center
  items-center
  p-5
`;

export const Content = tw.div`
  spinner-border
  animate-spin
  inline-block
  w-10
  h-10
  border-4
  rounded-full
`;
