import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CakeList } from '../pages/cakes-list';
import { CakeView } from '../pages/cake-view';
import { CakeEdit } from '../pages/cake-edit';
import { CakeCreate } from '../pages/cake-create';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/cakes" />
      </Route>
      <Route exact path="/cakes">
        <CakeList />
      </Route>
      <Route exact path="/cakes/create">
        <CakeCreate />
      </Route>
      <Route exact path="/cakes/:id">
        <CakeView />
      </Route>
      <Route path="/cakes/:id/edit">
        <CakeEdit />
      </Route>
    </Switch>
  );
};
