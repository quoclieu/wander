import React from 'react';
import { connect } from 'react-redux';

class Overview extends React.Component {
  state = {};

  renderDays = () => {
    return (
      <>
        <div>1st May 2019</div>
        <div>2nd May 2019</div>
      </>
    );
  };

  handleAddDateBtn = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/day');
  };

  render() {
    return (
      <div className="Overview">
        <div className="title">To Nakamura</div>
        <div className="dates">
          <div className="startDate">1/5/2019</div>
          <div className="endDate">2/5/2019</div>
        </div>
        <div className="daysView">
          {this.renderDays()}
          <button
            type="button"
            className="addDate"
            onClick={this.handleAddDateBtn}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { dates: state.dates };
};

export default connect(mapStateToProps)(Overview);
