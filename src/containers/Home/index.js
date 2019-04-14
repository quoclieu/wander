import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  state = {};

  render() {
    return <div className="Home">hi</div>;
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
