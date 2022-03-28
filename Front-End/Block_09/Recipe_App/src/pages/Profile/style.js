import tw from 'tailwind-styled-components';

export const Container = tw.div`
  container
  mt-8
`;

export const ProfileTitle = tw.h1`
  text-2xl
  text-center
  mb-4
  text-details
`;

export const ButtonsContainer = tw.div`
  flex
  flex-col
`;

export const Button = tw.button`
  w-full
  bg-details
  rounded-md
  text-background
  text-xl
  mb-2
  py-2
`;
