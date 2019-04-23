import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authenticate from './containers/Authenticate';
import Home from './containers/Home';
import Trip from './containers/Trip';
import Day from './containers/Day';
import Navbar from './components/Navbar';
import './styles.scss';

const PageNotFound = () => {
  return <div>404</div>;
};

const authenticated = true;

const authenticatedRoute = () => {
  return (
    <BrowserRouter>
      <Navbar authenticated={authenticated} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trip" exact component={Trip} />
        <Route path="/day" exact component={Day} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const unauthenticatedRoute = () => {
  return (
    <BrowserRouter>
      <Navbar authenticated={authenticated} />
      <Switch>
        <Route path="/" exact component={Authenticate} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  if (authenticated) {
    return <section className="App">{authenticatedRoute()}</section>;
  }
  return <section className="App">{unauthenticatedRoute()}</section>;
};

export default App;
