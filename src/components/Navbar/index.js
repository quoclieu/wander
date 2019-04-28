import React from 'react';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './styles.scss';

class Navbar extends React.Component {
  static renderNavLinks(authenticated) {
    if (authenticated) {
      return <SignedInLinks />;
    }
    return <SignedOutLinks />;
  }

  render() {
    const { authenticated } = this.props;
    let navClassName = 'Navbar';
    if (authenticated) {
      navClassName += ' authNav';
    }
    return (
      <nav className={navClassName}>{Navbar.renderNavLinks(authenticated)}</nav>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
