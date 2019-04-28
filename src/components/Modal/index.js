import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Modal extends React.Component {
  state = {};

  render() {
    const { show } = this.props;
    if (show) {
      return (
        <div className="Modal cover">
          <section className="modal-content">
            <button type="button" className="close-btn">
              X
            </button>
          </section>
        </div>
      );
    }
    return null;
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Modal);
