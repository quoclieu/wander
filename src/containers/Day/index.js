import React from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map';

class Day extends React.Component {
  state = {};

  render() {
    return (
      <div className="Day">
        <Map />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Day);
