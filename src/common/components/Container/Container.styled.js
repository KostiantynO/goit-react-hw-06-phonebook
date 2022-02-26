import { styled } from 'common';

export const ContainerStyled = styled.div`
  contain: content;

  display: flex;
  flex-wrap: nowrap;
  gap: clamp(20px, 2.1vw, 32px);
  max-width: ${({ theme }) => theme.spacing(100)};

  max-width: clamp(
    ${({ theme }) => theme.spacing(80)},
    50vw,
    ${({ theme }) => theme.spacing(120)}
  );

  padding: ${({ theme }) => theme.spacing(0, 5)};
  margin: 0 auto;
`;
