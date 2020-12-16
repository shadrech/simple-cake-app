import React from 'react';
import { Container, Col, Card, Button, FormGroup, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../store';
import { editCake, fetchCake } from '../../store/cakes/actions';
import { Cake } from '../../store/cakes/types';
import { StyledCard, StyledDiv, StyledRow } from './styles';

export const CakeEdit: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { cakes, loading } = useSelector((state: AppState) => state.cakes);
  const oldCake = cakes[id];
  const [cake, setCake] = React.useState(oldCake);

  const handleSave = () => {
    dispatch(editCake({ id, cake: { ...cake, yumFactor: Number(cake.yumFactor) } }))
  }

  const handleOnChange = (key: keyof Cake) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCake({
      ...cake,
      [key]: event.target.value
    });
  }

  React.useEffect(() => {
    if (!oldCake) dispatch(fetchCake({ id }))
  }, []);

  React.useEffect(() => {
    setCake(oldCake);
  }, [oldCake]);

  return (
    <Container>
      <StyledRow className="justify-content-md-center">
        <Col md={6}>
        <StyledDiv>
            <Link to="/cakes">Go back</Link>
          </StyledDiv>
          <StyledCard>
            <Card.Body>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Name</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Name"
                    type="text"
                    value={cake?.name}
                    onChange={handleOnChange('name')}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Comment</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Comment"
                    as="textarea"
                    rows={3}
                    value={cake?.comment}
                    onChange={handleOnChange('comment')}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Image URL</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Image URL"
                    type="text"
                    value={cake?.imageUrl}
                    onChange={handleOnChange('imageUrl')}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Yum Factor</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Image URL"
                    type="number"
                    value={cake?.yumFactor}
                    onChange={handleOnChange('yumFactor')}
                  />
                </InputGroup>
              </FormGroup>
            </Card.Body>
            <Card.Footer>
              <Button disabled={loading} variant="primary" onClick={handleSave}>Save</Button>
              {loading && <Spinner size="sm" animation="border" />}
            </Card.Footer>
          </StyledCard>
        </Col>
      </StyledRow>
    </Container>
  )
}