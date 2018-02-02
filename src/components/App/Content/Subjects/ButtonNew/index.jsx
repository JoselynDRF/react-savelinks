import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './buttonNew.css';

const propTypes = {
  handleOpenInputSubject: PropTypes.func.isRequired,
};

function ButtonNew({ handleOpenInputSubject }) {
  return (
    <Container>
      <Row>
        <Col className="text-right">
          <span
            className="icon-new"
            onClick={e => handleOpenInputSubject(e)}
            role="presentation"
            onKeyDown={() => {}}
          >
            <i className="fas fa-pencil-alt" />
          </span>
        </Col>
      </Row>
    </Container>
  );
}

ButtonNew.propTypes = propTypes;
export default ButtonNew;
