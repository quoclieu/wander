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
      <section className="Authenticate">
        <div className="wrapper">
          <header className="heading">wander.</header>
          <section className="login-button-row">
            <button type="button" onClick={this.handleLoginButton}>
              Log In
            </button>
            <button type="button">Sign Up</button>
          </section>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Authenticate);
