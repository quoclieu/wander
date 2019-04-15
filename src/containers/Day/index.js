import React from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map';
import './styles.scss';

class Day extends React.Component {
  state = {};

  handleAddDayBtn = () => {};

  renderPlanningBar = () => {
    return (
      <div className="planBar">
        <div className="date">1/1/2019</div>
        <button
          type="button"
          className="addDayBtn"
          onClick={this.handleAddDayBtn}
        >
          +
        </button>
        <div className="unplannedSection">
          <div>Some random place</div>
        </div>
        <div className="plannedSection">
          <div className="time">Time</div>
          <div className="Name">Some actual place</div>
          <div className="Location">Some actual place</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Day">
        {this.renderPlanningBar()}
        <div className="right">
          <Map />
        </div>
        <div className="clear" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Day);
