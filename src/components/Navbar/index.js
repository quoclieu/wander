import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Trips</Link>
          </li>
          <li className="right">
            <Link to="/">Help</Link>
          </li>
          <li className="right">Profile</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
