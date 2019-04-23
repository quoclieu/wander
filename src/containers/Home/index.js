/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Home extends React.Component {
  state = {};

  handleTripSelect = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/day');
  };

  handleOptionsBtn = () => {};

  renderTrips = () => {
    return (
      <section className="trip-grid">
        <div className="trip-card" onClick={this.handleTripSelect}>
          <header>
            <h4 className="title">Japan</h4>
            <p className="date">01/01/2020 - 10/02/2020</p>
          </header>
        </div>
      </section>
    );
  };

  handleNewTripBtn = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/overview');
  };

  render() {
    return (
      <section className="Home container">
        <header>
          <h1>Whats next?</h1>
        </header>
        {this.renderTrips()}
        <button
          type="button"
          onClick={this.handleNewTripBtn}
          className="new-trip-btn"
        >
          +
        </button>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
