import React from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map';
import './styles.scss';

class Day extends React.Component {
  state = {};

  renderPlanningBar = () => {
    return (
      <section className="plan-bar container">
        {/* TO DO: FIX THIS PART UP WITH PROPER SEMANTICS ONCE DESIGN IS CONFIRMED */}
        <div className="date">1/1/2019</div>
        <div className="unplanned-section">
          <div>Some random place</div>
        </div>
        <div className="planned-section">
          <div className="time">Time</div>
          <div className="Name">Some actual place</div>
          <div className="location">Some actual place</div>
        </div>
      </section>
    );
  };

  render() {
    return (
      <section className="Day">
        {this.renderPlanningBar()}
        <div className="right">
          <Map isMarkerShown />
        </div>
        <div className="clear" />
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Day);
