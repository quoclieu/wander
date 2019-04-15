import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authenticate from './containers/Authenticate';
// import InitialDetails from './containers/InitialDetails';
import Home from './containers/Home';
import Overview from './containers/Overview';
import Day from './containers/Day';
import Navbar from './components/Navbar';
import './styles.scss';

const PageNotFound = () => {
  return <div>404</div>;
};

const authenticatedRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/overview" exact component={Overview} />
        <Route path="/day" exact component={Day} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const unauthenticatedRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Authenticate} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const authenticated = true;

const App = () => {
  if (authenticated) {
    return <div className="App">{authenticatedRoute()}</div>;
  }
  return <div className="App">{unauthenticatedRoute()}</div>;
};

export default App;
