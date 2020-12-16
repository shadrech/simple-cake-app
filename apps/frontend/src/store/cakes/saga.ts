import { call, put, StrictEffect } from 'redux-saga/effects';
import { store, ReactNotificationOptions } from 'react-notifications-component';
import Api from '@aws-amplify/api-rest';
import { cakeError, createCake, createCakeSuccess, deleteCake, deleteCakeSuccess, editCake, editCakeSuccess, fetchCake, fetchCakesSuccess, fetchCakeSuccess, setLoading } from './actions';
import { API_NAME } from '../../config/amplify';
import { Cake } from './types';
import { history } from '../../routes/history';

export const notification: ReactNotificationOptions = {
  container: 'top-right',
  animationIn: ["animate__animated animate__fadeIn"],
  animationOut: ["animate__animated animate__fadeOut"],
  dismiss: {
    duration: 3000,
    onScreen: true
  }
}

export function* fetchCakesSaga(): Generator<StrictEffect, void, { cakes: Cake[] }> {
  yield put(setLoading({ loading: true }));

  try {
    const { cakes } = yield call([Api as any, 'get'], API_NAME, '/cakes');
    yield put(fetchCakesSuccess({ cakes }));
    yield put(setLoading({ loading: false }));
  } catch (error) {
    console.log(error);
    yield put(cakeError({ error: error.string }));
    store.addNotification({
      ...notification,
      message: error.message,
      type: 'danger'
    });
  }
}

export function* fetchCakeSaga(action: ReturnType<typeof fetchCake>): Generator<StrictEffect, void, any> {
  yield put(setLoading({ loading: true }));

  try {
    const { cake } = yield call([Api as any, 'get'], API_NAME, `/cakes/${action.payload.id}`);
    yield put(fetchCakeSuccess({ cake }));
    yield put(setLoading({ loading: false }));
  } catch (error) {
    console.log(error);
    yield put(cakeError({ error: error.string }));
    store.addNotification({
      ...notification,
      message: error.message,
      type: 'danger',
    });
  }
}

export function* deleteCakeSaga(action: ReturnType<typeof deleteCake>): Generator<StrictEffect, void, any> {
  yield put(setLoading({ loading: true }));

  try {
    yield call([Api as any, 'del'], API_NAME, `/cakes/${action.payload.id}`);
    yield put(deleteCakeSuccess({ id: action.payload.id }));
    yield put(setLoading({ loading: false }));
    store.addNotification({
      ...notification,
      message: 'Successfully deleted cake',
      type: 'success'
    });
    history.goBack();
  } catch (error) {
    console.log(error);
    yield put(cakeError({ error: error.string }));
    store.addNotification({
      ...notification,
      message: error.message,
      type: 'danger'
    });
  }
}

export function* editCakeSaga(action: ReturnType<typeof editCake>): Generator<StrictEffect, void, any> {
  yield put(setLoading({ loading: true }));

  try {
    yield call([Api as any, 'put'], API_NAME, `/cakes/${action.payload.id}`, {
      body: action.payload.cake
    });
    yield put(editCakeSuccess(action.payload));
    yield put(setLoading({ loading: false }));
    store.addNotification({
      ...notification,
      message: `Successfully edited ${action.payload.cake.name}`,
      type: 'success'
    });
  } catch (error) {
    console.log(error);
    yield put(cakeError({ error: error.string }));
    store.addNotification({
      ...notification,
      message: error.message,
      type: 'danger'
    });
  }
}

export function* createCakeSaga(action: ReturnType<typeof createCake>): Generator<StrictEffect, void, { cake: Cake }> {
  yield put(setLoading({ loading: true }));

  try {
    const { cake } = yield call([Api as any, 'post'], API_NAME, `/cakes`, {
      body: action.payload.cake
    });
    yield put(createCakeSuccess({ cake }));
    yield put(setLoading({ loading: false }));
    store.addNotification({
      ...notification,
      message: `Successfully created ${cake.name}`,
      type: 'success'
    });
    history.goBack();
  } catch (error) {
    console.log(error);
    yield put(cakeError({ error: error.string }));
    store.addNotification({
      ...notification,
      message: error.message,
      type: 'danger'
    });
  }
}
