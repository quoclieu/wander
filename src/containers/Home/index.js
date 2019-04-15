import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Home extends React.Component {
  state = {};

  renderTrips = () => {
    return (
      <>
        <div className="trip">
          <div className="title">Japan</div>
          <div className="date">01/01/2020</div>
        </div>
        <div className="trip">
          <div className="title">China</div>
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
      <div className="Home">
        <div>Trips</div>
        <div>Upcoming trips</div>
        <div className="tripGrid">
          {this.renderTrips()}
          <button
            type="button"
            onClick={this.handleNewTripBtn}
            className="newTripBtn"
          >
            +
          </button>
        </div>
        <div>Previous trips</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
