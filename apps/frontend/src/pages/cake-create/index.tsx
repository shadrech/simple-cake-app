import React from 'react';
import { Container, Col, Card, Button, FormGroup, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'store';
import { createCake } from '../../store/cakes/actions';
import { notification } from '../../store/cakes/saga';
import { Cake } from '../../store/cakes/types';
import { StyledCard, StyledDiv, StyledRow } from './styles';

export const CakeCreate: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.cakes);
  const [cake, setCake] = React.useState<Omit<Cake, 'id' | 'createdAt' | 'updatedAt'>>({
    name: '',
    comment: '',
    imageUrl: '',
    yumFactor: 0,
  });

  const handleSave = () => {
    if (!cake.name.length) {
      store.addNotification({
        ...notification,
        message: 'Name is required',
        type: 'danger'
      });
      return;
    }
    if (!cake.imageUrl.length) {
      store.addNotification({
        ...notification,
        message: 'Image URL is required',
        type: 'danger'
      });
      return;
    }
    if (cake.comment.length < 5 || cake.comment.length > 200) {
      store.addNotification({
        ...notification,
        message: 'A comment must be between 5 - 200 characters long',
        type: 'danger'
      });
      return;
    }

    dispatch(createCake({ cake: { ...cake, yumFactor: Number(cake.yumFactor) } }))
  }

  const handleOnChange = (key: keyof Cake) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCake({
      ...cake,
      [key]: event.target.value
    });
  }

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
              <Button disabled={loading} variant="primary" onClick={handleSave}>Create</Button>
              {loading && <Spinner size="sm" animation="border" />}
            </Card.Footer>
          </StyledCard>
        </Col>
      </StyledRow>
    </Container>
  )
}