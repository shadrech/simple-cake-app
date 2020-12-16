import { createAction } from '@reduxjs/toolkit';
import { DELETE_CAKE, DELETE_CAKE_SUCCESS, EDIT_CAKE, EDIT_CAKE_SUCCESS, FETCH_CAKES, FETCH_CAKES_SUCCESS, Cake, FETCH_CAKE, FETCH_CAKE_SUCCESS, CAKE_ERROR, LOADING, CREATE_CAKE, CREATE_CAKE_SUCCESS } from './types';

export const fetchCakes = createAction(FETCH_CAKES);

export const fetchCakesSuccess = createAction<{ cakes: Cake[]; }>(FETCH_CAKES_SUCCESS);

export const fetchCake = createAction<{ id: string }>(FETCH_CAKE);

export const fetchCakeSuccess = createAction<{ cake: Cake; }>(FETCH_CAKE_SUCCESS);

export const deleteCake = createAction<{ id: string }>(DELETE_CAKE);

export const deleteCakeSuccess = createAction<{ id: string }>(DELETE_CAKE_SUCCESS);

export const createCake = createAction<{ cake: Omit<Cake, 'id' | 'createdAt' | 'updatedAt'> }>(CREATE_CAKE);

export const createCakeSuccess = createAction<{ cake: Cake }>(CREATE_CAKE_SUCCESS);

export const editCake = createAction<{ id: string; cake: Partial<Cake> }>(EDIT_CAKE);

export const editCakeSuccess = createAction<{ id: string; cake: Partial<Cake> }>(EDIT_CAKE_SUCCESS);

export const cakeError = createAction<{ error: string; }>(CAKE_ERROR);

export const setLoading = createAction<{ loading: boolean; }>(LOADING);