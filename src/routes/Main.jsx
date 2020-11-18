import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LazyHome = lazy(() => import('views/Home'));

const Main = () => (
  <Switch>
    <Route path="/" exact component={LazyHome} />
  </Switch>
);

export default Main;
