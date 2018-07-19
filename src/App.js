import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from './Preview';
import Help from './Help';
import NotFound from './NotFound';

import Home from './Home';
import Page from './Page';
import Article from './Article';

import './App.css';

const App = (props) => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/help"/>
      <Route exact path="/help" component={Help} />
      <Route exact path="/home" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/article/:uid" render={routeProps => <Article {...routeProps} prismicCtx={props.prismicCtx} />} />      
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
