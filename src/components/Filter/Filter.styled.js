import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const DebouncedInputStyled = styled(DebounceInput)`
  width: 100%;
  padding: 4px;
  font-size: clamp(1.3rem, 3vw, 1.5rem);
`;
