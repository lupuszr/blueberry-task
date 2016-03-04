import App from './app/App.react';
import Auth from './auth/Page.react';
import Firebase from './firebase/Page.react';
import Home from './home/Page.react';
import Me from './me/Page.react';
import NotFound from './notfound/Page.react';
import Profile from './me/Profile.react';
import React from 'react';
import Settings from './me/Settings.react';
import Todos from './todos/Page.react';
import LoanCalc from './loan-calc/Page.react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  return (
    <Route component={App} path="/">
      <IndexRoute component={LoanCalc} />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
