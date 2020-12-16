import styled from 'styled-components';
import { Card, Row } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  button {
    margin-right: 1rem;
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const StyledRow = styled(Row)`
  .input-group {
    margin: 0.5rem 0;
  }
`;