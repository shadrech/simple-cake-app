import { createReducer } from '@reduxjs/toolkit';
import { cakeError, deleteCakeSuccess, editCakeSuccess, fetchCakesSuccess, fetchCakeSuccess, setLoading } from './actions';
import { Cake } from './types';

function arrayToObjectByKey(key: string, list: any[]) {
  return list.reduce((prev, curr) => {
    prev[curr[key]] = curr;
    return prev;
  }, {});
}

interface CakesState {
  cakes: Record<string, Cake>;
  error?: string;
  loading: boolean;
}

export const cakesReducer = createReducer({
  cakes: {},
  error: undefined,
  loading: false
} as CakesState, (builder) => builder
  .addCase(fetchCakesSuccess, (state, action) => {
    state.cakes = arrayToObjectByKey('id', action.payload.cakes);
    state.error = undefined;
  })

  .addCase(fetchCakeSuccess, (state, action) => {
    state.cakes[action.payload.cake.id] = action.payload.cake;
    state.error = undefined;
  })

  .addCase(deleteCakeSuccess, (state, action) => {
    delete state.cakes[action.payload.id]
    state.error = undefined;
  })

  .addCase(editCakeSuccess, (state, action) => {
    Object.assign(state.cakes[action.payload.id], action.payload.cake);
    state.error = undefined;
  })

  .addCase(cakeError, (state, action) => {
    state.error = action.payload.error;
    state.loading = false;
  })

  .addCase(setLoading, (state, action) => {
    state.loading = action.payload.loading;
  })
)
