import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Trips</Link>
          </li>
          <li className="right">
            <Link to="/">Help</Link>
          </li>
          <li className="right">
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
