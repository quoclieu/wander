import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Authenticate extends React.Component {
  state = {};

  routeChange = route => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push(route);
  };

  handleLoginButton = () => {
    this.routeChange('/overview');
  };

  render() {
    return (
      <div className="Authenticate">
        <div className="center">
          <div className="heading">wander.</div>
          <div className="loginButtonRow">
            <button type="button" onClick={this.handleLoginButton}>
              Log In
            </button>
            <button type="button">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Authenticate);
