import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialDetails from './containers/InitialDetails';
import Overview from './containers/Overview';
import './styles.scss';

const PageNotFound = () => {
  return(<div>404</div>)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={InitialDetails} />
            <Route path="/overview" exact component={Overview} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
