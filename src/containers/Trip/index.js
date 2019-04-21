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
          <div className="start-date">1/5/2019</div>
          <div className="end-date">2/5/2019</div>
        </div>
        <div className="days-view">
          {this.renderDays()}
          <button
            type="button"
            className="add-date"
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
