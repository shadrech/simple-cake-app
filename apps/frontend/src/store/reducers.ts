import { StateFromReducersMapObject, combineReducers } from 'redux';
import { cakesReducer } from './cakes/reducer';

const reducersObj = {
  cakes: cakesReducer
};

export const reducer = combineReducers(reducersObj);

export type AppState = StateFromReducersMapObject<typeof reducersObj>;
