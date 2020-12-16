import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  
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

  section {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      border: 1px solid #ececec;
      border-radius: 0.2rem;
      margin-right: 0.3rem;
      padding: 0.4rem 1.5rem;
    }
  }
`;