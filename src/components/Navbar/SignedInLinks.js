import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { toggleLogOutModal } from '../../actions';

class SignedInLinks extends React.Component {
  _handleLogOutBtn = () => {
    this.props.toggleLogOutModal();
  };

  render() {
    return (
      <ul className="signed-in">
        <li className="right">
          <button type="button" onClick={this._handleLogOutBtn}>
            Log Out
          </button>
        </li>
        <li>
          <Link to="/">wander</Link>
        </li>
        <li className="right">
          <Link to="/">Help</Link>
        </li>
        <li className="right">
          <Link to="/">Profile</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { toggleLogOutModal }
)(SignedInLinks);
