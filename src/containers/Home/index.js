import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Home extends React.Component {
  state = {};

  handleTripSelect = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/days');
  };

  handleOptionsBtn = () => {};

  renderTrips = () => {
    return (
      <>
        <div className="tripCard">
          <h4 className="title">Japan</h4>
          <div className="date">01/01/2020 - 10/02/2020</div>
        </div>
        <div className="tripCard">
          <h4 className="title">Date night</h4>
          <div className="date">01/01/2020</div>
        </div>
      </>
    );
  };

  handleNewTripBtn = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/overview');
  };

  render() {
    return (
      <div className="Home container">
        <h1>Whats next?</h1>
        <div className="tripGrid">{this.renderTrips()}</div>
        <div>
          <button
            type="button"
            onClick={this.handleNewTripBtn}
            className="newTripBtn"
          >
            +
          </button>
          <div>Previous trips</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
