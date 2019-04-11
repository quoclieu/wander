import React from 'react';
import { connect } from 'react-redux';

class Overview extends React.Component {

  state = {}
  
  render() {
    return (
      <div className="Overview">
        
      </div>
    )
  }
};
const mapStateToProps = (state) => {
  return {dates: state.dates}
}

export default connect(mapStateToProps)(Overview);