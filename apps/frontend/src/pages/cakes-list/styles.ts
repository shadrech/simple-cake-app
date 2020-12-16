import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececec;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;

  a {
    border: 1px solid #ececec;
    border-radius: 0.2rem;
    margin-right: 0.3rem;
    padding: 0.4rem 1.5rem;
  }
`;

export const StyledListItem = styled(ListGroup.Item)`
  margin: 0.1rem auto;
  width: 100%;

  a {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`;