'use client';

import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  `}
`;

export default function Home() {
  return (
    <main>
      <Container>Página Inicial</Container>
    </main>
  );
}
