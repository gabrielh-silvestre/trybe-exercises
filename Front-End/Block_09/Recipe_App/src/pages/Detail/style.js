import tw from 'tailwind-styled-components';

export const Container = tw.article`
  container
`;

export const TitleContainer = tw.section`
  mb-4

  bg-sections
`;

export const DetailTitle = tw.h1`
  font-bold
  text-center
  text-3xl
  text-text
`;

export const Instructions = tw.p`
  ${({ isShort }) => (isShort ? 'truncate' : 'overflow-visible')}

  text-lg
`;
