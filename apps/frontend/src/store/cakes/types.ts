export const FETCH_CAKES = 'cakes/FETCH_CAKES';
export const FETCH_CAKES_SUCCESS = 'cakes/FETCH_CAKES_SUCCESS';
export const FETCH_CAKES_ERROR = 'cakes/FETCH_CAKES_ERROR';
export const FETCH_CAKE = 'cakes/FETCH_CAKE';
export const FETCH_CAKE_SUCCESS = 'cakes/FETCH_CAKE_SUCCESS';
export const DELETE_CAKE = 'cakes/DELETE_CAKE';
export const DELETE_CAKE_SUCCESS = 'cakes/DELETE_CAKE_SUCCESS';
export const CREATE_CAKE = 'cakes/CREATE_CAKE';
export const CREATE_CAKE_SUCCESS = 'cakes/CREATE_CAKE_SUCCESS';
export const EDIT_CAKE = 'cakes/EDIT_CAKE';
export const EDIT_CAKE_SUCCESS = 'cakes/EDIT_CAKE_SUCCESS';
export const CAKE_ERROR = 'cakes/CAKE_ERROR';
export const LOADING = 'cakes/LOADING';

export interface Cake {
  id: string;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
  createdAt: string;
  updatedAt: string;
}
