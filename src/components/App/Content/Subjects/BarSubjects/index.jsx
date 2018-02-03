import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import ButtonNew from './ButtonNew';
import SearchBar from './SearchBar';

const propTypes = {
  handleOpenInputSubject: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

function BarSubjects({ handleOpenInputSubject, handleSearch }) {
  return (
    <Container>
      <Row>
        <Col md={{ size: 4, offset: 7 }}>
          <SearchBar handleSearch={handleSearch} />
        </Col>

        <Col md="1" className="text-right">
          <ButtonNew handleOpenInputSubject={handleOpenInputSubject} />
        </Col>
      </Row>
    </Container>
  );
}

BarSubjects.propTypes = propTypes;
export default BarSubjects;
