import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-inline: 3em;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  background: -webkit-linear-gradient(#8062ff, #6c63ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(60rem, 100%);
`;
