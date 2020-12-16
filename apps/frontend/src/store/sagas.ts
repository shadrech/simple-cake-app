import { takeLatest, takeLeading } from 'redux-saga/effects';
import { DELETE_CAKE, EDIT_CAKE, FETCH_CAKES, FETCH_CAKE, CREATE_CAKE } from './cakes/types';
import { editCakeSaga, fetchCakesSaga, fetchCakeSaga, deleteCakeSaga, createCakeSaga } from './cakes/saga';

export default function* sagas() {
  yield takeLatest(FETCH_CAKES, fetchCakesSaga);
  yield takeLatest(FETCH_CAKE, fetchCakeSaga);
  yield takeLatest(DELETE_CAKE, deleteCakeSaga);
  yield takeLatest(EDIT_CAKE, editCakeSaga);
  yield takeLeading(CREATE_CAKE, createCakeSaga);
}
