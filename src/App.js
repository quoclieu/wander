import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authenticate from './containers/Authenticate';
import Home from './containers/Home';
import Trip from './containers/Trip';
import Day from './containers/Day';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import './styles.scss';

const PageNotFound = () => {
  return <div>404</div>;
};

const authenticated = true;

const _unauthenticatedRoute = () => {
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

class App extends React.Component {
  _authenticatedRoute() {
    return (
      <BrowserRouter>
        <Navbar authenticated={authenticated} />
        <Modal show={this.props.utility.modals.logOut} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trip" exact component={Trip} />
          <Route path="/day" exact component={Day} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }

  render() {
    if (authenticated) {
      return <section className="App">{this._authenticatedRoute()}</section>;
    }
    return <section className="App">{_unauthenticatedRoute()}</section>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(App);
