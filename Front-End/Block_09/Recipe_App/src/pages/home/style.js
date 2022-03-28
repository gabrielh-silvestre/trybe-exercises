import tw from 'tailwind-styled-components';

export const Container = tw.main`
  container

  relative

  h-screen
  w-screen

  flex
  flex-col
  justify-center
  items-center

  bg-sections
`;

export const LoginForm = tw.form`
  flex
  flex-col
  justify-around

  w-full
  h-60

  p-3

  rounded-md
  bg-background
`;

export const LoginInput = tw.input`
  h-10

  px-2

  placeholder:text-slate-500

  border
  border-solid
  border-black
  rounded-md
`;

export const LoginButton = tw.button`
  py-2

  rounded-md
  font-bold

  transition-opacity
  duration-200

  disabled:opacity-80

  text-white
  bg-details
`;
