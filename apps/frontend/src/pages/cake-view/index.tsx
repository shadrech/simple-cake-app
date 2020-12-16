import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../store';
import { deleteCake, fetchCake } from '../../store/cakes/actions';
import { StyledCard, StyledDiv } from './styles';

export const CakeView: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { cakes } = useSelector((state: AppState) => state.cakes);
  const cake = cakes[id];

  const handleDelete = () => {
    dispatch(deleteCake({ id }))
  }

  React.useEffect(() => {
    if (!cake) dispatch(fetchCake({ id }))
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <StyledDiv>
            <Link to="/cakes">Go back</Link>
            <section>
              <Link to={`/cakes/${id}/edit`}>Edit</Link>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </section>
          </StyledDiv>
          <StyledCard>
            <Card.Body>
              <Card.Title>{cake?.name}</Card.Title>
              <Card.Subtitle className="mb-2">Yum Factor: {cake?.yumFactor}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <h6>Latest Comment</h6>
              <hr />
              <Card.Text>{cake?.comment}</Card.Text>
              <Card.Text>Image: {cake?.imageUrl}</Card.Text>
            </Card.Footer>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  )
}