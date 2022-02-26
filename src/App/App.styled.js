import { styled } from 'common';

export const AppStyled = styled.div`
  display: grid;
  grid: auto-flow / 1fr;
  gap: clamp(4px, 2.1vw, 16px);

  /* flex-direction: column; */
  /* height: 100%; */
  padding: ${({ theme }) => theme.spacing(5, 0, 8)};
  margin: 0 auto;

  @media screen and (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
`;
