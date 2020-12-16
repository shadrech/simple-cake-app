import React from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { fetchCakes } from '../../store/cakes/actions';
import { StyledListItem, Header } from './styles';

export const CakeList: React.FC = () => {
  const dispatch = useDispatch();
  const { cakes } = useSelector((state: AppState) => state.cakes);

  React.useEffect(() => {
    dispatch(fetchCakes())
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Header>
            <h2>Cakes app</h2>
            <Link to={`/cakes/create`}>Create</Link>
          </Header>
          <ListGroup>
            {Object.values(cakes).map(cake => (
              <StyledListItem>
                <Link to={`/cakes/${cake.id}`}>
                  {cake.name}
                  <span>{cake.imageUrl}</span>
                </Link>
              </StyledListItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}