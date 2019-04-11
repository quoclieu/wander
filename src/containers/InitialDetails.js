import React from 'react';
import { connect } from 'react-redux';

import { updateDates } from '../actions';
import Map from '../components/Map';

class InitialDetails extends React.Component {

  state = {}

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateDates(this.state)
    this.routeChange();
  }

  routeChange = () => {
    this.props.history.push('/overview');
  }

  onChangeDate = (key, date) => {
    console.log(date);
    this.setState({[key]: date})
  }

  render() {
    return (
      <div className="InitialDetails">
      <Map></Map>
        <form onSubmit={(e)=>this.onSubmitForm(e)}>
          <div className="daterangePicker">
            <input 
            className="startDate" 
            type="date" 
            onChange={(e)=>this.onChangeDate('initialDate', e.target.value)}/>
            <input
            className="endDate"
            type="date"
            onChange={(e)=>this.onChangeDate('endDate', e.target.value)}/>
          </div>
          <div className="countryPicker">
            Australia
          </div>
          <input type="submit" value="Continue" />
        </form>
      </div>
    )
  }
};

const mapStateToProps = () => {
  return {};
}

export default connect(mapStateToProps, {updateDates})(InitialDetails);
