import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import './styles.scss';

class Authenticate extends React.Component {
  state = {};

  routeChange = route => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push(route);
  };

  handleLoginButton = () => {
    this.routeChange('/overview');
  };

  render() {
    return (
      <section className="Authenticate">
        <Container>
          <Row>
            <Col sm={6} className="col">
              <section className="welcome">
                <header>
                  <p className="heading">
                    Plan your travel itinerary with
                    <span className="hoverable"> w</span>
                    <span className="hoverable">a</span>
                    <span className="hoverable">n</span>
                    <span className="hoverable">d</span>
                    <span className="hoverable">e</span>
                    <span className="hoverable">r</span>
                    <span className="hoverable colored">.</span>
                  </p>
                  <div className="white-dash" />
                  <p>
                    Create your own detailed journey or get inspiration from
                    others.
                  </p>
                </header>
                <button
                  type="button"
                  className="start rnd-btn white-border"
                  onClick={this.handleLoginButton}
                >
                  start a plan
                </button>
              </section>
            </Col>
            <Col sm={6} className="main-screenshot col">
              <div
                className="images-placeholder"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Authenticate);
