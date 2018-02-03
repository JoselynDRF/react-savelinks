import React from 'react';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './inputLink.css';

const propTypes = {
  handleCloseInputLink: PropTypes.func.isRequired,
  handleAddNewLink: PropTypes.func.isRequired,
};

function InputLink({ handleCloseInputLink, handleAddNewLink }) {
  return (
    <div>
      <Form onSubmit={handleAddNewLink} className="form-container">
        <FormGroup>
          <Input type="text" placeholder="URL del nuevo link" name="text" />
        </FormGroup>

        <Row>
          <Col className="text-right">
            <Button className="btn btn-secondary" onClick={handleCloseInputLink}> Cerrar </Button>
            <Button type="submit" className="btn btn-form-primary"> Enviar </Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </div>
  );
}

InputLink.propTypes = propTypes;
export default InputLink;
