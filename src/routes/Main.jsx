import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LazyHome = lazy(() => import('views/Home'));
const LazyMaison = lazy(() => import('views/Maison'));
const LazyNanopele = lazy(() => import('views/Nanopele'));
const LazyContact = lazy(() => import('views/Contact'));

const Main = () => (
  <Switch>
    <Route path="/" exact component={LazyHome} />
    <Route path="/maison" exact component={LazyMaison} />
    <Route path="/nanopele" exact component={LazyNanopele} />
    <Route path="/contato" exact component={LazyContact} />
  </Switch>
);

export default Main;
